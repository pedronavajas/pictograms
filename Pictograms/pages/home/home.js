(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // Se llama a esta función cuando un usuario navega a esta página.
        ready: function (element, options) {
            // Asigna acciones a los botones de categoria
            var categories = document.getElementsByClassName("category");

            var self = this;
            Array.prototype.forEach.call(categories, function (category) {
                category.addEventListener("click", self.goToCategory, false);
            });

            var pictograms = document.getElementsByClassName("pictogram");

            Array.prototype.forEach.call(pictograms, function (pictogram) {
                pictogram.addEventListener("click", self.addPictogram, false);
            });

            // Binding
            if (WinJS.Application.sessionState.selectedArray == null) {
                WinJS.Application.sessionState.selectedIndex = 1;
                WinJS.Application.sessionState.selectedArray = WinJS.Binding.as({
                    item1: "/images/pictograms/vacio.png",
                    item2: "/images/pictograms/vacio.png",
                    item3: "/images/pictograms/vacio.png",
                    item4: "/images/pictograms/vacio.png"
                });
            }
            WinJS.Binding.processAll(document.body, WinJS.Application.sessionState.selectedArray);
        },

        addPictogram: function (eventInfo) {
            var item = "item" + WinJS.Application.sessionState.selectedIndex;
            WinJS.Application.sessionState.selectedArray[item] = eventInfo.target.src;
            WinJS.Application.sessionState.selectedIndex++;
        },

        goToCategory: function (eventInfo) {
            var category = eventInfo.target.id;
            WinJS.Application.sessionState.categoryName = category;
            WinJS.Navigation.navigate("/pages/category/" + category + ".html");
        }
    });
})();
