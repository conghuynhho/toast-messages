function openToast({ title, type, messages, duration, delay }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = ` slideFromLeft 0.4s ease, fadeIn  ${duration}s ${delay}s linear forwards`;
    toast.innerHTML = `
        <div class="toast__icon"><i class="${getIconClassType(type)}"></i></div>
        <div class="toast__body">
          <div class="toast__title">
            <span>${title}</span>
          </div>
          <div class="toast__message">
            <span>${messages}</span>
          </div>
        </div>
        <div class="toast__close"><i class="fas fa-times"></i></div>
    `;
    main.appendChild(toast);

    const autoClose = setTimeout(() => {
      main.removeChild(toast);
    }, (duration + delay)*1000);

    toast.onclick = (e) => {
      if(e.target.closest('.toast__close')){
        main.removeChild(toast);
        clearTimeout(autoClose);
      }
    }
  }
}

const typeConst = {
  success: "success",
  warning: "warning",
  info: "info",
};

// function getToastClassType(type) {
//   switch (type) {
//     case typeConst.success:
//       return "toast--success";
//     case typeConst.warning:
//       return "toast--warning";
//     case typeConst.info:
//       return "toast--info";
//     default:
//       return "";
//   }
// }
function getIconClassType(type) {
  switch (type) {
    case typeConst.success:
      return "fas fa-check-circle";
    case typeConst.warning:
      return "fas fa-exclamation-circle";
    case typeConst.info:
      return "fas fa-info-circle";
    default:
      return "";
  }
}

const success = document.getElementById("success");
const info = document.getElementById("info");
const warning = document.getElementById("warning");

const successMessage = {
  title: "Fetch done",
  type: "success",
  message: "Your request to the server was finished well",
  duration: 0.8,
  delay: 4,
};
const infoMessage = {
  title: "Welcome",
  type: "info",
  message: "Welcome to my website",
  duration: 1,
  delay: 3,
};
const warningMessage = {
  title: "Warning",
  type: "warning",
  message:
    "Your infomation will be deleted soonadsfasdfasdfasdfasdfasdfadsfasdfasdfadsfas",
  duration: 0.8,
  delay: 5,
};

success.onclick = () => openToast(successMessage);
info.onclick = () => openToast(infoMessage);
warning.onclick = () => openToast(warningMessage);

function closeToast() {}
