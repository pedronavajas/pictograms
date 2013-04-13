(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/category/acciones.html", {
        // Se llama a esta función cuando un usuario navega a esta página.
        ready: function (element, options) {
            // Cambia el titulo segun la categoria
            var categoryName = WinJS.Application.sessionState.categoryName;
            var title = "Categoría: " + categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
            element.querySelector("header[role=banner] .pagetitle").textContent = title;

            // Asigna acciones a los botones de pictogramas
            var button = document.getElementById("abrir");
            button.addEventListener("click", this.addPictogram, false);

            button = document.getElementById("acariciar");
            button.addEventListener("click", this.addPictogram, false);

            button = document.getElementById("acostarse");
            button.addEventListener("click", this.addPictogram, false);

            button = document.getElementById("actividad");
            button.addEventListener("click", this.addPictogram, false);

            button = document.getElementById("afirmar");
            button.addEventListener("click", this.addPictogram, false);

            button = document.getElementById("andar");
            button.addEventListener("click", this.addPictogram, false);

            button = document.getElementById("aprender");
            button.addEventListener("click", this.addPictogram, false);

            button = document.getElementById("beber");
            button.addEventListener("click", this.addPictogram, false);
            /*
            button = document.getElementById("comer");
            button.addEventListener("click", this.addPictogram, false);

            button = document.getElementById("dormir");
            button.addEventListener("click", this.addPictogram, false);

            button = document.getElementById("jugar");
            button.addEventListener("click", this.addPictogram, false);
            */

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
            if (WinJS.Application.sessionState.selectedIndex == 1) {
                WinJS.Application.sessionState.selectedArray.item1 = eventInfo.target.src;
                WinJS.Application.sessionState.selectedIndex++;
            }
            else if (WinJS.Application.sessionState.selectedIndex == 2) {
                WinJS.Application.sessionState.selectedArray.item2 = eventInfo.target.src;
                WinJS.Application.sessionState.selectedIndex++;
            }
            else if (WinJS.Application.sessionState.selectedIndex == 3) {
                WinJS.Application.sessionState.selectedArray.item3 = eventInfo.target.src;
                WinJS.Application.sessionState.selectedIndex++;
            }
            else {
                WinJS.Application.sessionState.selectedArray.item4 = eventInfo.target.src;
            }
        },

        goToCategory: function (eventInfo) {
            var category = eventInfo.target.id;
            WinJS.Application.sessionState.categoryName = category;
            WinJS.Navigation.navigate("/pages/category/" + category + ".html");
        }
    });
})();
