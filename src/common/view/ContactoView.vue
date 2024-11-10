<template>
  <h1 class="text-3xl text-gray-800 font-extrabold text-center mb-5">
    Contactame
  </h1>
  <div class="grid md:grid-cols-2 gap-4">
    <div
      class="p-4 mx-auto w-full bg-white font-[sans-serif] md:order-1 order-2"
    >
      <form @submit="onSubmit" class="mt-8 space-y-4 w-full" id="myForm">
        <CustomInput
          v-model="name"
          v-bind="attrName"
          name="name"
          placeholder="Nombre"
          :error="errors.name"
        />
        <custom-input
          v-model="email"
          v-bind="attrEmail"
          name="email"
          type="email"
          placeholder="Correo Electronico"
          :error="errors.email"
        />
        <CustomTextArea
          v-model="message"
          v-bind="attrMessage"
          name="message"
          type="text"
          placeholder="Mensaje"
          :error="errors.message"
        />
        <button
          type="submit"
          class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
        >
          Enviar
        </button>
      </form>
    </div>
    <div class="flex justify-center flex-col items-center md:order-2 order-1">
      <img
        src="@/assets/images/me.jpg"
        class="h-[250px] rounded-full shadow-2xl"
        alt=""
        srcset=""
      />
      <RedesSociales :redes="socialRed" />
    </div>
  </div>
</template>
<script src="../../composables/sendEmail"></script>

<style lang="css" scoped></style>
