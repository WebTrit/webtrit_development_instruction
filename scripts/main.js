document.addEventListener('DOMContentLoaded', () => {
  const DEFAULT_CORE_HOST = 'core.demo.webtrit.com';
  const DEFAULT_TENANT_ID = 'default-tenant';
  const DEFAULT_USERNAME = 'default-username';

  const getQueryParam = (param, defaultValue) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(param) || defaultValue;
  };

  const replacePlaceholder = (placeholder, value) => {
    const regex = new RegExp(`${placeholder}`, 'g');
    document.body.innerHTML = document.body.innerHTML.replace(regex, value);
  }

  replacePlaceholder('{CORE_HOST}', getQueryParam('core', DEFAULT_CORE_HOST));
  replacePlaceholder('{TENANT_ID}', getQueryParam('tenant_id', DEFAULT_TENANT_ID));
  replacePlaceholder('{USERNAME}', getQueryParam('username', DEFAULT_USERNAME));
});

function openModal(imageSrc) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  modal.style.display = 'block';
  modalImage.src = imageSrc;
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}
