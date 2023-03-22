<template>
  <section>
    <!-- HEADER -->
    <header class="container row items-center justify-center">
      <h5>Robo Chef</h5>
      <q-icon name="smart_toy" size="md" class="q-pl-sm" />
    </header>
    <!-- SELECT -->
    <article class="q-py-md row justify-center">
      <div class="input-card col-12 q-px-md">
        <div class="q-pa-md">
          <q-select
            ref="qSelect"
            outlined
            v-model="selected"
            use-input
            use-chips
            multiple
            new-value-mode="toggle"
            input-debounce="0"
            :options="filterOptions"
            @filter="filterFn"
            label="Añade ingredientes"
            type="text"
            tabindex="0"
            menu-shrink
            max-values="5"
            @new-value="createValue"
            @input-value="(value) => handleUpdateInputValue(value)"
          >
            <template v-slot:option="scope">
              <div class="row justify-between items-center">
                <q-item v-bind="scope.itemProps" class="col-10">
                  <q-item-section>
                    <q-item-label>{{ scope.opt }}</q-item-label>
                  </q-item-section>
                </q-item>
                <div class="col-2">
                  <q-icon
                    name="delete"
                    color="grey-4"
                    size="xs"
                    @click="deleteIngredient(scope.opt)"
                    style="cursor: pointer"
                  />
                </div>
              </div>
            </template>

            <template #append>
              <q-btn
                class="col-12"
                color="grey"
                label="+"
                style="width: 100%"
                @click="manuallyAddIngredient()"
                flat
              />
            </template>
            <template #before-options>
              <q-btn
                class="col-12"
                color="grey"
                label="ok"
                v-close-popup
                style="width: 100%"
                flat
              />
            </template>
            <template #after-options>
              <q-btn
                class="col-12"
                color="grey"
                label="ok"
                v-close-popup
                style="width: 100%"
                flat
              />
            </template>
          </q-select>
        </div>
      </div>
    </article>
    <!-- CHIPS -->
    <!--     <article class="q-px-lg row justify-center">
      <q-chip
        v-for="(ing, index) in selected"
        removable
        @remove="removeIngredient(index)"
        color="warning"
        text-color="white"
        :key="ing"
      >
        {{ ing }}
      </q-chip>
    </article> -->
    <!-- SUBMIT -->
    <article class="q-px-lg row justify-center q-py-md q-my-sm">
      <q-btn
        color="warning"
        label="Submit"
        @click="submitInput()"
        :loading="loading"
      />
<!--       <q-btn
        color="warning"
        label="Submit"
        @click="printThis()"
        :loading="loading"
      /> -->
    </article>
    <!-- LIST -->
    <article
      class="flex column items-center input-card q-px-md"
      style="margin: auto"
      v-if="response"
    >
      <h1 class="col-12 text-h5">{{ response["title"] }}</h1>
      <b>Ingredientes</b>
      <ul class="col-12 self-start">
        <li v-for="ing in response['ingredients']" :key="ing">
          {{ ing }}
        </li>
      </ul>
      <b>Preparación</b>
      <ul class="col-12 self-start">
        <li v-for="ing in response['prep']" :key="ing">
          {{ ing }}
        </li>
      </ul>
    </article>
    <article class="input-card" style="margin: auto">
      <q-list bordered separator class="rounded-borders">
        <q-expansion-item
          v-for="(r, index) in getRecipes"
          :key="index"
          ref="printcontent"
        >
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar icon="kitchen" color="primary" text-color="white" />
            </q-item-section>

            <q-item-section> {{ r.title }} </q-item-section>
          </template>

          <q-card>
            <q-card-section class="q-pb-0">
              <b>Ingredientes</b>
              <ul class="col-12 self-start">
                <li v-for="ing in r['ingredients']" :key="ing">
                  {{ ing }}
                </li>
              </ul>
              <b>Preparación</b>
              <ul class="col-12 self-start">
                <li v-for="ing in r['prep']" :key="ing">
                  {{ ing }}
                </li>
              </ul>
            </q-card-section>
            <div class="row justify-center q-pb-md q-pl-md">
              <div id="label" class="col-12 row items-center" v-if="label">
                <div class="text-grey">Hecho con RoboChef</div>
                <q-icon name="smart_toy" size="sm" class="q-pl-sm" color="grey" />
              </div>

              <div class="col-12" id="btn-section">
                <q-btn round color="blue-4" icon="share" @click="share(r)" />
                <q-btn
                  round
                  color="light-green-4 q-mx-sm"
                  icon="share"
                  @click="share2(r)"
                />
                <q-btn
                  round
                  color="grey-5"
                  icon="content_copy"
                  @click="share3(r, index)"
                  ref="btn"
                />
              </div>
            </div>
          </q-card>
        </q-expansion-item>
      </q-list>
    </article>
  </section>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
/* import CustomSelect from './CustomSelect.vue'
 */
const stringOptions = [
  "Agua",
  "Tu carita bonita",
  "Tu lindo trasero",
  "Tomate",
  "Anchoa",
  "Lechuga",
  "Manzana",
  "Ron",
  "Calamar",
  "Carne de bebé",
  "Cristales rotos",
  "Tornillos",
  "Cigarros",
  "Pan",
  "Miel",
  "el espíritu de Galicia",
  "tu triste infancia",
  "cuchillo de carnicero",
  "esperanza",
  "Barcelona",
  "Entrecot",
  "Pimienta",
  "Nata líquida",
  "queso Roquefort",
];

export default defineComponent({
  name: "MainLayout",
  /*  components: {
    CustomSelect,
  }, */
  setup() {
    const qSelect = ref(null);
    const customSelect = ref(null);
    const printcontent = ref(null);

    const courseDiv = ref(null);

    const OPEN_API_KEY = process.env.VUE_APP_OPEN_API_KEY;
    const API_URL = "https://api.openai.com/v1/completions";
    const test = JSON.parse(
      '{ "title": "Ensalada de Tonmate, Anchoa y Manicomio", "ingredients": [ "Tomate", "Anchoa", "Lechuga", "Aceite de Oliva", "Vinagre de Manzana", "Sal", "Pimienta" ], "prep": [ "Cortar los tomates en rodajas finas.", "Cortar la lechuga en juliana.", "En un bol, mezclar los ingredientes cortados con las anchoas.", "Añadir aceite de oliva, vinagre de manszanna, sal y pimienta al gusto.", "Mezclar bien los ingredientes.", "Servir la ensalada en un plato." ] }'
    );
    const store = useStore();
    const getIngredients = computed(() => store.state.recipes["ingredients"]);

    const getRecipes = computed(() => store.state.recipes["recipes"]);
    /*     const reverseRecipes = getRecipes.value.reverse(); */
    const filterOptions = ref(stringOptions);
    const label = ref(true);

    /*     onMounted(() => {
      // Logs: `Headline`
      console.log(select.value.focus());
    }); */
    onMounted(() => {
      if (!getIngredients.value.length) {
        store.dispatch("recipes/action_setIngredients", stringOptions);
      }
    });
    return {
      courseDiv,
      label,
      text: ref(""),
      selected: ref([]),
      showList: ref(false),
      response: ref(null),
      loading: ref(false),
      getRecipes,
      maxIngredientsOptions: ref(20),
      inputValue: ref(""),
      qSelect,
      printcontent,
      customSelect,
      getIngredients,
      test3: ref(test),
      filterOptions,
      /*  options: ref(optionsOriginal), */
      handleUpdateInputValue(e) {
        this.inputValue = e;

        /*         const inputValue = this.$refs.qSelect
      this.$refs.qSelect.add(inputValue, 'toggle') */
      },

      deleteIngredient(ing) {
        let index = getIngredients.value.indexOf(ing);
        getIngredients.value.splice(index, 1);
        store.dispatch("recipes/action_setIngredients", getIngredients.value);
      },
      manuallyAddIngredient() {
        console.log(getIngredients.value.length);
        if (this.inputValue.length && getIngredients.value.length < 20) {
          this.$refs.qSelect.add(this.inputValue);
          store.dispatch("recipes/action_addIngredient", this.inputValue);
          this.$refs.qSelect.updateInputValue("");
          this.$refs.qSelect.focus();
        }
      },
      /* SOCIAL */

      tst6() {
        let positive = Math.floor(Math.random() * 5) + 1;
        let negative = 5 - positive;

        console.log("💛".repeat(positive) + "🖤".repeat(negative));
      },
      share3s(recipe, index) {
        console.log(recipe, index, this.$refs.btn[index].$el);

        console.log(this.$refs.printcontent);
      },
      async share3(recipe, index) {
        const el = this.$refs.printcontent[index].$el;
        console.log("printing..", this.$refs.printcontent[0].$parent.$parent);

        const options = {
          type: "dataURL",
        };
        const html2canvas = require("html2canvas");
        const printCanvas = await html2canvas(el, options);

        const link = document.createElement("a");
        link.setAttribute("download", "download.png");
        link.setAttribute("href", printCanvas.toDataURL("image/png"));
        const response = await fetch(link);
        const blob = await response.blob();
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        /* link.click(); */

        console.log("done");
      },
      share(recipe) {
        console.log(recipe["prep"][0]);
        console.log(recipe["ingredients"].join("-"));
        let title = `He hecho' ${recipe.title}' con robochef\n`;
        let positive = Math.floor(Math.random() * 5) + 1;
        let negative = 5 - positive;
        let stars = "💛".repeat(positive) + "🤍".repeat(negative) + "\n";

        let msg = title + "\n" + stars + "\n" + "🍕 Ñam!\n\n";
        /*         let prep = recipe["prep"].map((el) => `🟠${el}`).join("\n");
        let ingredients = recipe["ingredients"]
          .map((el) => `🍴${el}`)
          .join("\n"); */
        /*       recipe.title + "\n " + "🍕" + recipe["prep"].join("🍴 '\n'"); */
        console.log(msg.length);
        window.open(
          "https://twitter.com/intent/tweet?url=" +
            encodeURIComponent("robo-chef-ai.netlify.app") +
            "&text=🤖 " +
            encodeURIComponent(msg.substring(0, 250))
        );
      },
      share2(recipe) {
        let title = `He hecho *${recipe.title}* con robochef`;
        let ingredients = recipe["ingredients"]
          .map((el) => `\u2022${el}`)
          .join("\n");
        let prep = recipe["prep"].map((el) => `\u2022${el}`).join("\n");
        let message =
          title +
          "\n" +
          " *Ingredientes:*" +
          ingredients +
          "\n" +
          " *Preparación*" +
          prep +
          " " +
          encodeURIComponent("https://robo-chef-ai.netlify.app/#/");
        window.open(`https://wa.me/?text=${message}`);
      },
      createValue(val, done) {
        if (val.length > 0 && getIngredients.value.length < 20) {
          if (!stringOptions.includes(val)) {
            stringOptions.push(val);
            store.dispatch("recipes/action_addIngredient", val);
          }
          done(val, "toggle");
        }
      },

      filterFn(val, update) {
        update(() => {
          if (val === "") {
            filterOptions.value = getIngredients.value;
          } else {
            const needle = val.toLowerCase();
            filterOptions.value = getIngredients.value.filter(
              (v) => v.toLowerCase().indexOf(needle) > -1
            );
          }
        });
      },
      removeIngredient(ing, index) {
        this.selected.splice(index, 1);
      },
      test2() {
        console.log(getRecipes.value);
        console.log(getIngredients.value);

        /*   store.dispatch("recipes/action_setIngredients", stringOptions); */
        /*         console.log(this.test3);
         */
      },
      /* API */
      submitInput() {
        console.log(this.selected);
        this.showList = true;
        this.response = null;
        this.requestAPI();
      },
      async requestAPI() {
        const ingredients = this.selected;
        const messages = [
          {
            role: "user",
            content:
              "Eres un cocinero robot experto. Recibes un array de ingredientes :['Tomate', 'Pimiento', 'Carne de caballo'] y das una receta directamente. Añade los ingredientes que quieras. No das explicaciones, no saludas, no te despides, solo das la receta directamente. Divide cada paso de la preparación. No muestres otra cosa que el título de la receta, ingredientes y preparación en forma de objeto JSON. ",
          },
        ];
        this.loading = true;
        const response = await fetch(API_URL, {
          model: "text-davinci-003",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPEN_API_KEY}`,
          },
          body: JSON.stringify({
            model: "text-davinci-003",
            prompt: `Eres un cocinero robot experto. Recibes un array de ingredientes :${ingredients} y das una receta directamente. Añade los ingredientes que quieras. No das explicaciones, no saludas, no te despides, solo das la receta directamente. Divide cada paso de la preparación. No muestres otra cosa que el título de la receta, ingredientes y preparación en forma de objeto JSON completo y válido, cuyas propiedades se llaman title, ingredients y prep.`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          }),
        });

        const data = await response.json();

        this.loading = false;
        try {
          this.response = JSON.parse(data.choices[0].text);
          store.dispatch("recipes/action_setRecipes", this.response);
        } catch (error) {
          alert("Something Went Wrong try again");
          this.requestAPI();
        }
        console.log(this.response);
      },
    };
  },
});
</script>
<style scoped>
.container {
  background-color: #efeae6;
}

.container2 {
  background-color: #f7f5f3;
}

.input-card {
  max-width: 500px;
}

.q-chip {
  background-color: red !important;
}
</style>
