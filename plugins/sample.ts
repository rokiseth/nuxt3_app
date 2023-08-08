class SamplePlugins {
  public hoge = (): string => {
    return "hoge";
  };
}

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      samp: new SamplePlugins(),
    },
  };
});
