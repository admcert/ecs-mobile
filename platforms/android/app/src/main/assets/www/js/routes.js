var routes = [
  // Index page
  {
    path: '/',
    url: './example.html',
    name: 'home',
  },
  // About page
  {
    path: '/about/',
    url: './framework7/pages/about.html',
    name: 'about',
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 1</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 1</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },
  {
    path: '/panel-right-2/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 2</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 2</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },

  // Components
  {
    path: '/accordion/',
    url: './framework7/pages/accordion.html',
  },
  {
    path: '/action-sheet/',
    componentUrl: './framework7/pages/action-sheet.html',
  },
  {
    path: '/autocomplete/',
    componentUrl: './framework7/pages/autocomplete.html',
  },
  {
    path: '/badge/',
    componentUrl: './framework7/pages/badge.html',
  },
  {
    path: '/buttons/',
    url: './framework7/pages/buttons.html',
  },
  {
    path: '/calendar/',
    componentUrl: './framework7/pages/calendar.html',
  },
  {
    path: '/calendar-page/',
    componentUrl: './framework7/pages/calendar-page.html',
  },
  {
    path: '/cards/',
    url: './framework7/pages/cards.html',
  },
  {
    path: '/checkbox/',
    url: './framework7/pages/checkbox.html',
  },
  {
    path: '/chips/',
    componentUrl: './framework7/pages/chips.html',
  },
  {
    path: '/contacts-list/',
    url: './framework7/pages/contacts-list.html',
  },
  {
    path: '/content-block/',
    url: './framework7/pages/content-block.html',
  },
  {
    path: '/data-table/',
    componentUrl: './framework7/pages/data-table.html',
  },
  {
    path: '/dialog/',
    componentUrl: './framework7/pages/dialog.html',
  },
  {
    path: '/fab/',
    url: './framework7/pages/fab.html',
  },
  {
    path: '/fab-morph/',
    url: './framework7/pages/fab-morph.html',
  },
  {
    path: '/form-storage/',
    url: './framework7/pages/form-storage.html',
  },
  {
    path: '/grid/',
    url: './framework7/pages/grid.html',
  },
  {
    path: '/icons/',
    componentUrl: './framework7/pages/icons.html',
  },
  {
    path: '/infinite-scroll/',
    componentUrl: './framework7/pages/infinite-scroll.html',
  },
  {
    path: '/inputs/',
    url: './framework7/pages/inputs.html',
  },
  {
    path: '/lazy-load/',
    url: './framework7/pages/lazy-load.html',
  },
  {
    path: '/list/',
    url: './framework7/pages/list.html',
  },
  {
    path: '/list-index/',
    componentUrl: './framework7/pages/list-index.html',
  },
  {
    path: '/login-screen/',
    componentUrl: './framework7/pages/login-screen.html',
  },
  {
    path: '/login-screen-page/',
    componentUrl: './framework7/pages/login-screen-page.html',
  },
  {
    path: '/messages/',
    componentUrl: './framework7/pages/messages.html',
  },
  {
    path: '/navbar/',
    url: './framework7/pages/navbar.html',
  },
  {
    path: '/navbar-hide-scroll/',
    url: './framework7/pages/navbar-hide-scroll.html',
  },
  {
    path: '/notifications/',
    componentUrl: './framework7/pages/notifications.html',
  },
  {
    path: '/panel/',
    url: './framework7/pages/panel.html',
  },
  {
    path: '/photo-browser/',
    componentUrl: './framework7/pages/photo-browser.html',
  },
  {
    path: '/picker/',
    componentUrl: './framework7/pages/picker.html',
  },
  {
    path: '/popup/',
    componentUrl: './framework7/pages/popup.html',
  },
  {
    path: '/popover/',
    url: './framework7/pages/popover.html',
  },
  {
    path: '/preloader/',
    componentUrl: './framework7/pages/preloader.html',
  },
  {
    path: '/progressbar/',
    componentUrl: './framework7/pages/progressbar.html',
  },
  {
    path: '/pull-to-refresh/',
    componentUrl: './framework7/pages/pull-to-refresh.html',
  },
  {
    path: '/radio/',
    url: './framework7/pages/radio.html',
  },
  {
    path: '/range/',
    componentUrl: './framework7/pages/range.html',
  },
  {
    path: '/searchbar/',
    url: './framework7/pages/searchbar.html',
  },
  {
    path: '/searchbar-expandable/',
    url: './framework7/pages/searchbar-expandable.html',
  },
  {
    path: '/sheet-modal/',
    componentUrl: './framework7/pages/sheet-modal.html',
  },
  {
    path: '/smart-select/',
    url: './framework7/pages/smart-select.html',
  },
  {
    path: '/sortable/',
    url: './framework7/pages/sortable.html',
  },
  {
    path: '/statusbar/',
    componentUrl: './framework7/pages/statusbar.html',
  },
  {
    path: '/stepper/',
    componentUrl: './framework7/pages/stepper.html',
  },
  {
    path: '/subnavbar/',
    url: './framework7/pages/subnavbar.html',
  },
  {
    path: '/subnavbar-title/',
    url: './framework7/pages/subnavbar-title.html',
  },
  {
    path: '/swiper/',
    url: './framework7/pages/swiper.html',
    routes: [
      {
        path: 'swiper-horizontal/',
        url: './framework7/pages/swiper-horizontal.html',
      },
      {
        path: 'swiper-vertical/',
        url: './framework7/pages/swiper-vertical.html',
      },
      {
        path: 'swiper-space-between/',
        url: './framework7/pages/swiper-space-between.html',
      },
      {
        path: 'swiper-multiple/',
        url: './framework7/pages/swiper-multiple.html',
      },
      {
        path: 'swiper-nested/',
        url: './framework7/pages/swiper-nested.html',
      },
      {
        path: 'swiper-loop/',
        url: './framework7/pages/swiper-loop.html',
      },
      {
        path: 'swiper-3d-cube/',
        url: './framework7/pages/swiper-3d-cube.html',
      },
      {
        path: 'swiper-3d-coverflow/',
        url: './framework7/pages/swiper-3d-coverflow.html',
      },
      {
        path: 'swiper-3d-flip/',
        url: './framework7/pages/swiper-3d-flip.html',
      },
      {
        path: 'swiper-fade/',
        url: './framework7/pages/swiper-fade.html',
      },
      {
        path: 'swiper-scrollbar/',
        url: './framework7/pages/swiper-scrollbar.html',
      },
      {
        path: 'swiper-gallery/',
        componentUrl: './framework7/pages/swiper-gallery.html',
      },
      {
        path: 'swiper-custom-controls/',
        url: './framework7/pages/swiper-custom-controls.html',
      },
      {
        path: 'swiper-parallax/',
        url: './framework7/pages/swiper-parallax.html',
      },
      {
        path: 'swiper-lazy/',
        url: './framework7/pages/swiper-lazy.html',
      },
      {
        path: 'swiper-pagination-progress/',
        url: './framework7/pages/swiper-pagination-progress.html',
      },
      {
        path: 'swiper-pagination-fraction/',
        url: './framework7/pages/swiper-pagination-fraction.html',
      },
      {
        path: 'swiper-zoom/',
        url: './framework7/pages/swiper-zoom.html',
      },
    ],
  },
  {
    path: '/swipeout/',
    componentUrl: './framework7/pages/swipeout.html',
  },
  {
    path: '/tabs/',
    url: './framework7/pages/tabs.html',
  },
  {
    path: '/tabs-static/',
    url: './framework7/pages/tabs-static.html',
  },
  {
    path: '/tabs-animated/',
    url: './framework7/pages/tabs-animated.html',
  },
  {
    path: '/tabs-swipeable/',
    url: './framework7/pages/tabs-swipeable.html',
  },
  {
    path: '/tabs-routable/',
    url: './framework7/pages/tabs-routable.html',
    tabs: [
      {
        path: '/',
        id: 'tab1',
        content: ' \
        <div class="block"> \
          <p>Tab 1 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p> \
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p> \
        </div> \
        ',
      },
      {
        path: '/tab2/',
        id: 'tab2',
        content: '\
        <div class="block"> \
          <p>Tab 2 content</p> \
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
      {
        path: '/tab3/',
        id: 'tab3',
        content: '\
        <div class="block"> \
          <p>Tab 3 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
    ],
  },
  {
    path: '/toast/',
    componentUrl: './framework7/pages/toast.html',
  },
  {
    path: '/toggle/',
    url: './framework7/pages/toggle.html',
  },
  {
    path: '/toolbar-tabbar/',
    componentUrl: './framework7/pages/toolbar-tabbar.html',
    routes: [
      {
        path: 'tabbar/',
        componentUrl: './framework7/pages/tabbar.html',
      },
      {
        path: 'tabbar-labels/',
        componentUrl: './framework7/pages/tabbar-labels.html',
      },
      {
        path: 'tabbar-scrollable/',
        componentUrl: './framework7/pages/tabbar-scrollable.html',
      },
      {
        path: 'toolbar-hide-scroll/',
        url: './framework7/pages/toolbar-hide-scroll.html',
      },
    ],
  },
  {
    path: '/timeline/',
    url: './framework7/pages/timeline.html',
  },
  {
    path: '/timeline-vertical/',
    url: './framework7/pages/timeline-vertical.html',
  },
  {
    path: '/timeline-horizontal/',
    url: './framework7/pages/timeline-horizontal.html',
  },
  {
    path: '/timeline-horizontal-calendar/',
    url: './framework7/pages/timeline-horizontal-calendar.html',
  },
  {
    path: '/virtual-list/',
    componentUrl: './framework7/pages/virtual-list.html',
  },
  {
    path: '/vi/',
    componentUrl: './framework7/pages/vi.html',
  },

  // Color Themes
  {
    path: '/color-themes/',
    componentUrl: './framework7/pages/color-themes.html',
  },

  // Page Loaders
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './framework7/pages/page-loader-template7.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './framework7/pages/page-loader-component.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './framework7/pages/404.html',
  },
];
