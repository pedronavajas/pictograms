(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // Se llama a esta función cuando un usuario navega a esta página.
        ready: function (element, options) {
            // Asigna acciones a los botones de categoria
            var button = document.getElementById("acciones");
            button.addEventListener("click", this.goToCategory, false);

            button = document.getElementById("comportamiento");
            button.addEventListener("click", this.goToCategory, false);

            button = document.getElementById("emociones");
            button.addEventListener("click", this.goToCategory, false);

            button = document.getElementById("gustos");
            button.addEventListener("click", this.goToCategory, false);

            button = document.getElementById("lugares");
            button.addEventListener("click", this.goToCategory, false);

            button = document.getElementById("personas");
            button.addEventListener("click", this.goToCategory, false);

            // Asigna acciones a los botones de acceso rapido
            button = document.getElementById("quick-yes");
            button.addEventListener("click", this.addPictogram, false);

            button = document.getElementById("quick-no");
            button.addEventListener("click", this.addPictogram, false);

            button = document.getElementById("quick-want");
            button.addEventListener("click", this.addPictogram, false);
            
            button = document.getElementById("quick-no-want");
            button.addEventListener("click", this.addPictogram, false);

            // Binding
            WinJS.Application.sessionState.selectedIndex = 1;
            WinJS.Application.sessionState.selectedArray = WinJS.Binding.as({
                item1: "/images/pictograms/vacio.png",
                item2: "/images/pictograms/vacio.png",
                item3: "/images/pictograms/vacio.png",
                item4: "/images/pictograms/vacio.png"
            });
            WinJS.Binding.processAll(document.body, WinJS.Application.sessionState.selectedArray);
        },

        addPictogram: function (eventInfo) {
            if (WinJS.Application.sessionState.selectedIndex == 1) {
                WinJS.Application.sessionState.selectedArray.item1 = eventInfo.target.src;
            }
            else if (WinJS.Application.sessionState.selectedIndex == 2) {
                WinJS.Application.sessionState.selectedArray.item2 = eventInfo.target.src;
            }
            else if (WinJS.Application.sessionState.selectedIndex == 3) {
                WinJS.Application.sessionState.selectedArray.item3 = eventInfo.target.src;
            }
            else {
                WinJS.Application.sessionState.selectedArray.item4 = eventInfo.target.src;
            }

            WinJS.Application.sessionState.selectedIndex++;
        },

        goToCategory: function (eventInfo) {
            var category = eventInfo.target.id;
            WinJS.Application.sessionState.categoryName = category;
            WinJS.Navigation.navigate("/pages/category/" + category + ".html");
        },
    });
})();
