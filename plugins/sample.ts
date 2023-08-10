export interface SamplePluginInterface {
  hoge(): string;
}

class SamplePlugin implements SamplePluginInterface {
  public hoge = () => {
    return 'hoge';
  };
}

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      samp: new SamplePlugin(),
    },
  };
});
