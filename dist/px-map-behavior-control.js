'use strict';(function(){'use strict';var namespace=window.PxMapBehavior=window.PxMapBehavior||{};var ControlImpl={properties:{position:{type:String,value:'bottomright',observer:'shouldUpdateInst'}},addInst:function addInst(parent){this.elementInst.addTo(parent)},removeInst:function removeInst(parent){this.elementInst.remove()}};namespace.Control=[namespace.Layer,ControlImpl];var ZoomControlImpl={createInst:function createInst(options){return L.control.zoom(options)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.position!==nextOptions.position){this.elementInst.setPosition(nextOptions.position)}},getInstOptions:function getInstOptions(){return{position:this.position,zoomInText:'<i class="fa fa-plus"></i>',zoomOutText:'<i class="fa fa-minus"></i>'}}};namespace.ZoomControl=[namespace.Control,ZoomControlImpl]})();
//# sourceMappingURL=px-map-behavior-control.js.map
