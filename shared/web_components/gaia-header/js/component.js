var Headers = new function() {
  // Set up for header custom element
  var p = Object.create(HTMLElement.prototype);

  p.handleActionButtonClick = function(e) {
    var actionEvent = new CustomEvent('action', {'detail':{'type':e.target.dataset.action}});
    setTimeout(this.dispatchEvent.bind(this, actionEvent));
  };

  p.createdCallback = function() {
    var template = document.getElementById('header-template');
    var clone = template.content.cloneNode(true);

    // Action button
    var actionButton = clone.getElementById('action-button');
    var actionType = this.dataset.action;
    if (actionType) {
      var actionButtonInner = clone.getElementById('action-button-inner');
      actionButtonInner.classList.add('icon-'+actionType);
      actionButton.dataset.action = actionType;
      actionButton.addEventListener('click', p.handleActionButtonClick.bind(this));
    } else {
      actionButton.style.display = 'none';
    }
    
    // Skin
    var skin = this.dataset.skin;
    if (skin) {
      var header = clone.getElementById('header');
      header.parentNode.classList.add('skin-' + skin);
    }
  
    var root = this.createShadowRoot();
    root.appendChild(clone);
  };

  document.registerElement("gaia-header", { prototype: p });
};