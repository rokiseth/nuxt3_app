<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">よおこそいらっしゃいませ</v-card-title>
        <v-card-text>
          <p>プログラミングに関する記事を掲載しています。</p>
          <span>
            GitHubは
            <a
              href="https://github.com/rokiseth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </a>
          </span>
          <br />
          <span>
            このページのGitHubは
            <a
              href="https://github.com/rokiseth/nuxt_app/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              こちら
            </a>
          </span>
          <hr class="my-3" />
          <small
            >当ページはVuetify + Nuxt.js +
            Bootstrapで構成されております。</small
          >
          <br />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
