(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // Se llama a esta función cuando un usuario navega a esta página. Esta
        // rellena los elementos de la página con los datos de la aplicación.
        ready: function (element, options) {
            // TODO: Inicializar la página aquí.

            var buttom = document.getElementById("exit");
            buttom.addEventListener("click", this.changeItem, false);

            var buttom2 = document.getElementById("page2");
            buttom2.addEventListener("click", this.goToPage2, false);

            WinJS.Application.sessionState.selectedArray = WinJS.Binding.as({
                item1: "/images/pictograms/vacio.png",
                item2: null,
                item3: null,
                item4: null
            });

            WinJS.Binding.processAll(document.body, WinJS.Application.sessionState.selectedArray);
        },

        changeItem: function (eventInfo) {
            WinJS.Application.sessionState.selectedArray.item1 = "/images/pictograms/ok.png";
        },

        goToPage2: function (eventInfo) {
            WinJS.Navigation.navigate("/pages/page2/pagecontrol.html");
        }
    });
})();
