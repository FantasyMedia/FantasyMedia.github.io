/**
 *
 * site
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-29
 * @update 2014-10-29
 */

(function () {

  var $ = {
    getOne: function (str) {
      return document.querySelector(str);
    }
  };

  ({

    init: function () {
      this.bindEvent();
    },

    bindEvent: function () {
      var links = $.getOne('#links');

      $.getOne('#menu').onclick = function () {
        links.classList.add('show');
        return false;
      };

      $.getOne('#close').onclick = function () {
        links.classList.remove('show');
        return false;
      };
    }

  }).init();

})();
