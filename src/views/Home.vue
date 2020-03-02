<template>
  <div class="home">
    <div class="max-w-screen-md mx-auto p-4 md:p-16 leading-luko text-luko-black flex">
      <img class="h-luko-md mr-luko-md" src="../assets/emma-photo.png">
      <div>
        <h5 class="font-luko-bold font-bold mb-luko-xs">Emma</h5>
        <p class="mb-luko-md">
          Don't forget that for each new subscriber you refer, both you and them get
          <strong class="font-luko-bold">one free month</strong>
          of coverage!
        </p>
        <p>
          Share your
          <strong class="font-luko-bold">one free month</strong> referal code
        </p>
        <div class="mt-luko-md mb-luko-lg flex">
          <Btn :preText="referalCode" :withIcon="true" class="cursor-copy" @click="copyReferalCode">
            <template v-slot:icon>
              <CopyIcon/>
            </template>
            <template v-if="canCopy">
              <p>Copy</p>
            </template>
            <template v-if="hasCopied">
              <p>Copied !</p>
            </template>
          </Btn>
        </div>
        <p>
          You can also send
          <strong class="font-luko-bold">one free month</strong> by email
        </p>
        <TxtArea class="mb-luko-md" :value="inputEmails" @update="(v) => inputEmails = v"/>
        <div class="flex">
          <Slct :options="emails" @update="(v) => selectedEmailIndex = v" :selectedIndex="selectedEmailIndex" />
          <Btn class="cursor-pointer ml-luko-sm" :secondary="true">
            <template>
              <p>Done</p>
            </template>
          </Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Btn from "@/components/commons/Btn.vue";
import Slct from "@/components/commons/Slct.vue";
import TxtArea from "@/components/commons/TxtArea.vue";
import CopyIcon from "@/assets/icons/Copy.vue";

export default Vue.extend({
  components: {
    Btn,
    TxtArea,
    Slct,
    CopyIcon
  },
  data() {
    return {
      referalCode: "SHARETHELOVE+5WMXM",
      inputEmails: "",
      canCopy: true,
      hasCopied: false,
      selectedEmailIndex: -1
    };
  },
  computed: {
    emails(): string[] {
      // trim whitespace, split and filter out empty elements
      return this.inputEmails.replace(" ", "").split(";").filter(e => e !== "");
    },

    selectedEmail(): string | undefined {
      return this.emails[this.selectedEmailIndex]
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
      try {
        document.execCommand("copy");
        this.canCopy = false;
        this.hasCopied = true;
        setTimeout(() => {
          this.canCopy = true;
          this.hasCopied = false;
        }, 1000)
      } catch(e) {
        console.error("Couldn't copy.");
      }
      // remove element
      document.body.removeChild(fakeInput);
    },

    sendEmail() {
      console.log(this.selectedEmail)
    }
  }
});
</script>
