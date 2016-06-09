export class Index {

  constructor() { }

  configureRouter(config, router) {
    config.title = 'Samples';

    config.map([
      { name: 'v-grid', route: 'v-grid', moduleId: './v-grid/index', title: 'v-grid' },
      { name: 'default', route: '', redirect: 'v-grid' }
    ]);
    this.router = router;
  }
}
