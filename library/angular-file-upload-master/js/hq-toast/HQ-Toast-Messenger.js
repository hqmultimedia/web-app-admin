upload.controller('NotificationController', function($rootScope, $scope, $http, $location, $routeParams) {

    // Toast function
    $rootScope.HQToast = function(Title, Message, Type) {

         
        // Khai báo biến
        var title = Title;
        var message = Message;
        var type = Type;
        var animate_direction = 'BasicFade';
        // animate_direction có 3 giá trị : BasicFade,Left,Bottom
        // var animate_direction =$rootScope.Toast_setting ;
        // var duration ='5000';

        //Toast
        const main = document.getElementById("toast");
        if (main) {
            const toast = document.createElement("div");

            // Auto remove toast

            const autoRemoveId = setTimeout(function() {
                main.removeChild(toast);
            }, 5500);

            // Remove toast when clicked
            toast.onclick = function(e) {
                if (e.target.closest(".toast__close")) {
                    main.removeChild(toast);
                    clearTimeout(autoRemoveId);
                }
            };

            const icons = {
                success: "fas fa-check-circle",
                info: "fas fa-info-circle",
                warning: "fas fa-exclamation-circle",
                error: "fas fa-exclamation-circle"
            };
            const icon = icons[type];
            const delay = (5500 / 1000).toFixed(2);

            toast.classList.add("toast", `Toast--Animate--In--${animate_direction}`, `toast--${type}`, `toast--background--${type}`, `toast--text--${type}`);
            // toast.style.animation = `InLeft ease .4s forwards`;

            toast.innerHTML = `
                            <div class="toast__icon">
                                <i class="${icon}"></i>
                            </div>
                            <div class="toast__body">
                                <h3 class="toast__title">${title}</h3>
                                <p class="toast__text">${message}</p>
                            </div>
                            <div class="toast__close">
                                <i class="fas fa-times"></i>
                            </div>
                        `;
            main.appendChild(toast);

            // cho nó ra khỏi màn hình rồi mới ẩn
            // set thời gian reset animate
            var header = $('.toast');
            setTimeout(function() {
                header.addClass('Toast--Animate--Out--' + animate_direction);
            }, 5000);
        }
    }


})