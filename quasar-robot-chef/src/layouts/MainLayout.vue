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
      <q-btn color="primary" label="Submit" @click="submitInput()" />
    </article>
    <!-- LIST -->
    <article class="q-px-lg row justify-center q-py-md q-my-sm">
      <p>
        Respuesta:
        <br />
        {{ response }}
      </p>
      <!--   {{ JSON.parse(test) }} -->
    </article>
    <!--     <article class="row justify-center" v-if="showList">
      <div class="q-px-lg q-py-md">
        <h6>Ingredientes</h6>
        <ul class="q-px-xl">
          <li :key="el" v-for="el in [1, 2, 3, 4]">
            {{ el }}
          </li>
        </ul>
        <h6>Preparación</h6>
        <ul class="q-px-xl">
          <li :key="el" v-for="el in [1, 2, 3, 4]">
            {{ el }}
          </li>
        </ul>
      </div>
    </article> -->
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const OPEN_API_KEY = "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";
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const test =
      "[{Saludo: 'Hola',}, {Título: 'Ensalada de Tomate, Anchoa y Lechuga'}, {Preparación: 1. Corta los tomates en rebanadas y colócalos en un plato. 2. Corta la cabeza de la lechuga en trozos y agrégala a los tomates. 3. Coloca las anchoas sobre la lechuga y los tomates. 4. Mezcla el aceite de oliva, el vinagre de vino tinto, la sal y la pimienta en un tazón y agita. 5. Rocía la mezcla sobre la ensalada y sirve. Puedes agregar otros ingredientes como cebolla roja en rodajas y aceitunas negras cortadas en rodajas. ¡Buen provecho!}, {Despedida: ¡Que disfrutes tu ensalada!}]";
    return {
      test: ref(test),

      text: ref(""),
      selected: ref([]),
      showList: ref(false),
      response: ref(null),

      options: ["Tomate", "Anchoa", "Lechuga", "Manzana"],

      removeIngredient(ing, index) {
        this.selected.splice(index, 1);
      },

      submitInput() {
        console.log(this.selected);
        this.showList = true;
        this.requestAPI();
      },
      async requestAPI() {
        const ingredients = this.selected;
        const messages = [
          {
            role: "system",
            content:
              "Eres un chef experto. Vas a recibir una lista de ingredientes en forma de array. ",
          },

          {
            role: "user",
            content: `Hola, busca una receta con estos ingredientes y añade los que quieras. Esta es la lista: [Tomate, Anchoa, Lechuga].`,
          },

          {
            role: "assistant",
            content:
              "[{Saludo: Hola, aquí te va la receta que encontré con los ingredientes que me diste.}, {Título: Ensalada de tomate, anchoa y lechuga}, {Ingredientes: - 2 tomates maduros - 8 filetes de anchoa - 1 lechuga romana - 1/4 de taza de aceitunas negras - 2 cucharadas de alcaparras - 1/4 taza de aceite de oliva - 2 cucharadas de vinagre - Sal y pimienta al gusto}, {Tiempo de preparación: 20 minutos}, {Preparación: 1. Lava los tomates y córtalos en rodajas de 1 cm de espesor. Lava la lechuga y córtala en juliana. 2. En una ensaladera coloca los tomates en el fondo y encima de ellos la lechuga. 3. Agrega los filetes de anchoa, las aceitunas y las alcaparras en la ensalada. 4. En un recipiente pequeño, mezcla el aceite de oliva, el vinagre, la sal y la pimienta hasta que se emulsione. 5. Sazona la ensalada con la mezcla de aceite y vinagre y mezcla bien para que se adhiera al resto de los ingredientes. 6. Sirve inmediatamente para disfrutar de una deliciosa ensalada.}, {Despedida: ¡Buen provecho!}]",
          },
          {
            role: "user",
            content: `Esta es la lista: ${ingredients}.`,
          },
          {
            role: "system",
            content:
              "Responde directamente con la receta sin hacer más preguntas, asume el resto de información. Responde así: [{Saludo: una frase breve}, {Título: el título de la receta}, {Ingredientes: la lista de ingredientes},  {Tiempo de preparación: Tiempo de preparación}, {Preparación: la lista de los pasos de la preparación}, {Despedida: tono divertido e irónico}.]",
          },

          /*        {
            role: "user",
            content:
              "Hola, querido chef, quiero hacer una receta con carne de gacela",
          }, */
          /*      {
            role: "assistant",
            content: "The Los Angeles Dodgers won the World Series in 2020.",
          }, */
          /*    { role: "user", content: "Where was it played?" }, */
        ];
        const response = await fetch(API_URL, {
          model: "gpt-3.5-turbo",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPEN_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",

            messages: [...messages, { role: "user", content: "prompt" }],
            stream: false,
          }),
        });

        const data = await response.json();
        this.response = data.choices[0].message.content;
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
