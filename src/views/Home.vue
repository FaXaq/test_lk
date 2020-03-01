<template>
  <div class="home">
    <div class="max-w-screen-md mx-auto p-4 md:p-16 leading-luko text-luko-black flex">
      <img class="h-luko-md mr-luko-md" src="../assets/emma-photo.png">
      <div>
        <h5 class="font-luko-bold font-bold mb-luko-xs">Emma</h5>
        <p class="mb-luko-md">
          Don't forget that for each new subscriber you refer, both you and them get
          <strong
            class="font-luko-bold"
          >one free month</strong> of coverage!
        </p>
        <p>
          Share your
          <strong class="font-luko-bold">one free month</strong> referal code
        </p>
        <div class="mt-luko-md mb-luko-lg flex">
          <Btn :preText="referalCode" class="cursor-copy" @click="copyReferalCode">
            <template v-slot:icon>
              <CopyIcon/>
            </template>
            <template>
              <p>Copy</p>
            </template>
          </Btn>
        </div>
        <p>
          You can also send
          <strong class="font-luko-bold">one free month</strong> by email
        </p>
        <TxtArea :value="inputEmails" @update="(v) => inputEmails = v"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Btn from "@/components/commons/Btn.vue";
import TxtArea from "@/components/commons/TxtArea.vue";
import CopyIcon from "@/assets/icons/Copy.vue";

export default Vue.extend({
  components: {
    Btn,
    TxtArea,
    CopyIcon
  },
  data() {
    return {
      referalCode: "SHARETHELOVE+5WMXM",
      inputEmails: ""
    };
  },
  computed: {
    emails(): string[] {
      return this.inputEmails.replace(" ", "").split(";");
    }
  },
  methods: {
    copyReferalCode() {
      const fakeInput: HTMLTextAreaElement = document.createElement("textarea");
      // hide input
      fakeInput.style.top = "0";
      fakeInput.style.left = "0";
      fakeInput.style.position = "fixed";
      // add referal code value to it
      fakeInput.value = this.referalCode;
      // append to DOM
      document.body.appendChild(fakeInput);
      // select it
      fakeInput.focus();
      fakeInput.select();
      fakeInput.setSelectionRange(0, 99999);
      // copy
      document.execCommand("copy");
      // remove element
      document.body.removeChild(fakeInput);
    }
  }
});
</script>
