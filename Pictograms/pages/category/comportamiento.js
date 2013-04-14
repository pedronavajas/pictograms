(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/category/comportamiento.html", {
        // Se llama a esta función cuando un usuario navega a esta página.
        ready: function (element, options) {
            // Cambia el nombre de la pagina
            var categoryName = WinJS.Application.sessionState.categoryName;
            var title = "Categoría: " + categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
            element.querySelector("header[role=banner] .pagetitle").textContent = title;

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

            var deleteButton = document.getElementById("delete");
            deleteButton.addEventListener("click", self.cleanSelectedArray, false);

            var playButton = document.getElementById("play");
            playButton.addEventListener("click", self.goToPlay, false);

            // Binding
            if (WinJS.Application.sessionState.selectedArray == null) {
                WinJS.Application.sessionState.selectedIndex = 1;
                WinJS.Application.sessionState.selectedArray = WinJS.Binding.as({
                    item1: { name: "", src: "/images/pictograms/vacio.png" },
                    item2: { name: "", src: "/images/pictograms/vacio.png" },
                    item3: { name: "", src: "/images/pictograms/vacio.png" },
                    item4: { name: "", src: "/images/pictograms/vacio.png" }
                });
            }
            WinJS.Binding.processAll(document.body, WinJS.Application.sessionState.selectedArray);
        },

        addPictogram: function (eventInfo) {
            var item = "item" + WinJS.Application.sessionState.selectedIndex;
            WinJS.Application.sessionState.selectedArray[item] = { name: eventInfo.target.id, src: eventInfo.target.src };
            WinJS.Application.sessionState.selectedIndex++;
        },

        goToCategory: function (eventInfo) {
            var category = eventInfo.target.id;
            WinJS.Application.sessionState.categoryName = category;
            WinJS.Navigation.navigate("/pages/category/" + category + ".html");
        },

        goToPlay: function (eventInfo) {
            WinJS.Navigation.navigate("/pages/play/play.html");
        },

        cleanSelectedArray: function (eventInfo) {
            WinJS.Application.sessionState.selectedIndex = 1;
            WinJS.Application.sessionState.selectedArray = WinJS.Binding.as({
                item1: { name: "", src: "/images/pictograms/vacio.png" },
                item2: { name: "", src: "/images/pictograms/vacio.png" },
                item3: { name: "", src: "/images/pictograms/vacio.png" },
                item4: { name: "", src: "/images/pictograms/vacio.png" }
            });
            WinJS.Binding.processAll(document.body, WinJS.Application.sessionState.selectedArray);
        }
    });
})();
