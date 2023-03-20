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
        <q-select
          outlined
          v-model="selected"
          :options="options"
          label="Ingredientes"
          hint="Introduce ingredientes"
          multiple
        />
      </div>
    </article>
    <!-- CHIPS -->
    <article class="q-px-lg row justify-center">
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
    </article>
    <!-- SUBMIT -->
    <article class="q-px-lg row justify-center q-py-md q-my-sm">
      <q-btn
        color="primary"
        label="Submit"
        @click="submitInput()"
        :loading="loading"
      />
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
      <q-list bordered class="rounded-borders">
        <q-expansion-item v-for="(r, index) in getRecipes" :key="index">
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar icon="kitchen" color="primary" text-color="white" />
            </q-item-section>

            <q-item-section> {{ r.title }} </q-item-section>

            <!--             <q-item-section side>
              <div class="row items-center">
                <q-icon name="star" color="red" size="24px" />
                <q-icon name="star" color="red" size="24px" />
                <q-icon name="star" color="red" size="24px" />
              </div>
            </q-item-section> -->
          </template>

          <q-card>
            <q-card-section>
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
          </q-card>
        </q-expansion-item>
      </q-list>
    </article>
  </section>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const OPEN_API_KEY = process.env.VUE_APP_OPEN_API_KEY;
    const API_URL = "https://api.openai.com/v1/completions";
    const test = JSON.parse(
      '{ "title": "Ensalada de Tonmate, Anchoa y Manicomio", "ingredients": [ "Tomate", "Anchoa", "Lechuga", "Aceite de Oliva", "Vinagre de Manzana", "Sal", "Pimienta" ], "prep": [ "Cortar los tomates en rodajas finas.", "Cortar la lechuga en juliana.", "En un bol, mezclar los ingredientes cortados con las anchoas.", "Añadir aceite de oliva, vinagre de manszanna, sal y pimienta al gusto.", "Mezclar bien los ingredientes.", "Servir la ensalada en un plato." ] }'
    );
    const store = useStore();

    const getRecipes = computed(() => store.state.recipes["recipes"]);

    return {
      text: ref(""),
      selected: ref([]),
      showList: ref(false),
      response: ref(null),
      loading: ref(false),
      getRecipes,
      test3: ref(test),

      options: [
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
      ],

      removeIngredient(ing, index) {
        this.selected.splice(index, 1);
      },
      test2() {
        console.log(getRecipes);
        console.log(this.test3);
        store.dispatch("recipes/action_setRecipes", this.test3);
      },
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
</style>
