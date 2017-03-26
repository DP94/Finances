var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.Finances;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = 'ABA7A4CB5023214FF3EBC960E383591D';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 3.141592653589793, $intern_1 = {3:1, 8:1}, $intern_2 = {3:1, 10:1, 8:1}, $intern_3 = {3:1, 10:1, 7:1, 8:1}, $intern_4 = {3:1, 5:1}, $intern_5 = {11:1, 13:1, 3:1, 6:1, 4:1}, $intern_6 = {13:1, 35:1, 3:1, 6:1, 4:1}, $intern_7 = {13:1, 36:1, 3:1, 6:1, 4:1}, $intern_8 = {13:1, 37:1, 3:1, 6:1, 4:1}, $intern_9 = {20:1, 3:1, 6:1, 4:1}, $intern_10 = {13:1, 61:1, 3:1, 6:1, 4:1}, $intern_11 = {12:1}, $intern_12 = {59:1, 3:1, 10:1, 7:1, 8:1}, $intern_13 = {46:1, 3:1, 10:1, 8:1}, $intern_14 = 4194303, $intern_15 = 524288, $intern_16 = 16777216, $intern_17 = 33554432, $intern_18 = 67108864, $intern_19 = {16:1, 3:1, 6:1, 4:1}, $intern_20 = {25:1, 12:1, 24:1, 23:1, 15:1, 21:1, 18:1}, $intern_21 = {3:1, 9:1, 17:1}, $intern_22 = {25:1, 12:1, 24:1, 23:1, 15:1, 154:1, 21:1, 18:1}, $intern_23 = {25:1, 12:1, 24:1, 23:1, 15:1, 84:1, 21:1, 18:1}, $intern_24 = {38:1, 3:1, 6:1, 4:1}, $intern_25 = {54:1, 3:1}, $intern_26 = {15:1, 56:1}, $intern_27 = {426:1, 28:1, 12:1, 427:1}, $intern_28 = {12:1, 76:1}, $intern_29 = {12:1, 106:1, 76:1}, $intern_30 = {12:1, 106:1}, $intern_31 = {85:1, 28:1}, $intern_32 = {429:1, 28:1}, $intern_33 = {39:1}, $intern_34 = {3:1, 39:1}, $intern_35 = {3:1, 32:1}, $intern_36 = {3:1, 6:1, 4:1, 45:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals_0(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 465:1, 6:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function charToString(x_0){
  return String.fromCharCode(x_0);
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumSuperclass = superclass;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(112, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_16(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 112);
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.this$01.animation = null;
  $layout(this$static.this$01, 0);
}

function $run(this$static, duration, startTime, element){
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = duration;
  this$static.startTime = startTime;
  this$static.element = element;
  ++this$static.runId;
  $execute(this$static.callback, now_1());
}

function $run_0(this$static, duration, element){
  $run(this$static, duration, now_1(), element);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    $onUpdate(this$static, (1 + Math.cos($intern_0 + progress * $intern_0)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    $onUpdate(this$static, (1 + Math.cos($intern_0)) / 2);
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    this$static.this$01.animation = null;
    $layout(this$static.this$01, 0);
    return false;
  }
  return true;
}

function Animation(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(147, 1, {});
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 147);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(390, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 390);
defineClass(464, 1, {});
var instance_0;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 464);
defineClass(103, 1, {103:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 103);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(414, 464, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 414);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(415, 103, {103:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 415);
function $cancelAnimationFrame(this$static, requestId){
  $remove_2(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {476:1, 3:1, 5:1}, 105, this$static.animationRequests.array.length, 0, 1);
  curAnimations = dynamicCast($toArray(this$static.animationRequests, curAnimations), 476);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_2(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(416, 464, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_3(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 416);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(146, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 146);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(417, 146, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 417);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(105, 103, {103:1, 105:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 105);
function $getAriaValue(value_0){
  var buf, item_0, item$index, item$max;
  buf = new StringBuilder;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    $append_0((buf.string += '' + item_0 , buf), ' ');
  }
  return $trim(buf.string);
}

function $set(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(values));
}

function Attribute(name_0){
  this.name_0 = name_0;
}

defineClass(151, 1, {});
var Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client', 'Attribute', 151);
function AriaValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(63, 151, {}, AriaValueAttribute);
var Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'AriaValueAttribute', 63);
function PrimitiveValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(104, 151, {}, PrimitiveValueAttribute);
var Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'PrimitiveValueAttribute', 104);
function $clinit_State(){
  $clinit_State = emptyMethod;
  new PrimitiveValueAttribute('aria-busy');
  new AriaValueAttribute('aria-checked');
  new PrimitiveValueAttribute('aria-disabled');
  new AriaValueAttribute('aria-expanded');
  new AriaValueAttribute('aria-grabbed');
  HIDDEN = new PrimitiveValueAttribute('aria-hidden');
  new AriaValueAttribute('aria-invalid');
  new AriaValueAttribute('aria-pressed');
  new AriaValueAttribute('aria-selected');
}

var HIDDEN;
function $initCause(this$static, cause){
  checkState_0(!this$static.cause);
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(8, 1, $intern_1);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  var className, msg;
  className = $getName(this.___clazz$);
  msg = this.getMessage();
  return msg != null?className + ': ' + msg:className;
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 8);
function Exception(){
  captureStackTrace(this, this.detailMessage);
}

function Exception_0(message){
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(10, 8, $intern_2);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 10);
function RuntimeException(){
  Exception.call(this);
}

function RuntimeException_0(message){
  Exception_0.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(7, 10, $intern_3, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 7);
function CodeDownloadException(message){
  RuntimeException_0.call(this, message);
}

defineClass(451, 7, $intern_3, CodeDownloadException);
var Lcom_google_gwt_core_client_CodeDownloadException_2_classLit = createForClass('com.google.gwt.core.client', 'CodeDownloadException', 451);
function Duration(){
  this.start_0 = now_1();
}

defineClass(121, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 121);
function isScript(){
  return true;
}

defineClass(163, 7, $intern_3);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 163);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(30, 163, {30:1, 3:1, 10:1, 7:1, 8:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 30);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

var Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit = createForInterface('com.google.gwt.core.client', 'RunAsyncCallback');
defineClass(430, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 430);
function $clinit_ScriptInjector(){
  $clinit_ScriptInjector = emptyMethod;
  TOP_WINDOW = $wnd;
}

function attachListeners(scriptElement, callback, removeTag){
  $clinit_ScriptInjector();
  function clearCallbacks(){
    scriptElement.onerror = scriptElement.onreadystatechange = scriptElement.onload = null;
    removeTag && nativeRemove(scriptElement);
  }

  scriptElement.onload = $entry(function(){
    clearCallbacks();
    callback && callback.onSuccess(null);
  }
  );
  scriptElement.onerror = $entry(function(){
    clearCallbacks();
    if (callback) {
      var ex = new CodeDownloadException('onerror() called.');
      callback.onFailure(ex);
    }
  }
  );
  scriptElement.onreadystatechange = $entry(function(){
    /loaded|complete/.test(scriptElement.readyState) && scriptElement.onload();
  }
  );
}

function nativeAttachToHead(doc, scriptElement){
  $clinit_ScriptInjector();
  (doc.head || doc.getElementsByTagName('head')[0]).appendChild(scriptElement);
}

function nativeDefaultWindow(){
  $clinit_ScriptInjector();
  return window;
}

function nativeGetDocument(wnd){
  $clinit_ScriptInjector();
  return wnd.document;
}

function nativeMakeScriptElement(doc){
  $clinit_ScriptInjector();
  return doc.createElement('script');
}

function nativeRemove(scriptElement){
  $clinit_ScriptInjector();
  scriptElement.parentNode.removeChild(scriptElement);
}

function nativeSetSrc(element, url_0){
  $clinit_ScriptInjector();
  element.src = url_0;
}

function nativeSetText(element, scriptBody){
  $clinit_ScriptInjector();
  element.text = scriptBody;
}

var TOP_WINDOW;
function $inject(this$static){
  var doc, scriptElement, wnd;
  wnd = !this$static.window_0?nativeDefaultWindow():this$static.window_0;
  doc = nativeGetDocument(wnd);
  scriptElement = nativeMakeScriptElement(doc);
  nativeSetText(scriptElement, this$static.scriptBody);
  nativeAttachToHead(doc, scriptElement);
  this$static.removeTag && nativeRemove(scriptElement);
  return scriptElement;
}

function $setWindow(this$static, window_0){
  this$static.window_0 = window_0;
  return this$static;
}

function ScriptInjector$FromString(scriptBody){
  this.scriptBody = scriptBody;
}

defineClass(117, 1, {}, ScriptInjector$FromString);
_.removeTag = true;
var Lcom_google_gwt_core_client_ScriptInjector$FromString_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector/FromString', 117);
function $inject_0(this$static){
  var doc, scriptElement, wnd;
  wnd = nativeDefaultWindow();
  doc = nativeGetDocument(wnd);
  scriptElement = nativeMakeScriptElement(doc);
  (!!this$static.callback || this$static.removeTag) && attachListeners(scriptElement, this$static.callback, this$static.removeTag);
  nativeSetSrc(scriptElement, this$static.scriptUrl);
  nativeAttachToHead(doc, scriptElement);
  return scriptElement;
}

function $setCallback(this$static, callback){
  this$static.callback = callback;
  return this$static;
}

function $setRemoveTag(this$static){
  this$static.removeTag = true;
  return this$static;
}

function ScriptInjector$FromUrl(scriptUrl){
  this.scriptUrl = scriptUrl;
}

defineClass(118, 1, {}, ScriptInjector$FromUrl);
_.removeTag = false;
var Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector/FromUrl', 118);
function $clinit_AsyncFragmentLoader(){
  $clinit_AsyncFragmentLoader = emptyMethod;
  BROWSER_LOADER = new AsyncFragmentLoader(2, initValues(getClassLiteralForArray(I_classLit, 1), {3:1}, 0, 7, []), new ScriptTagLoadingStrategy);
}

function $clearRequestsAlreadyLoaded(this$static){
  var offset;
  while ($size(this$static.requestedExclusives) > 0 && this$static.isLoaded[$peek(this$static.requestedExclusives)]) {
    offset = $remove(this$static.requestedExclusives);
    offset < this$static.pendingDownloadErrorHandlers.length && setCheck(this$static.pendingDownloadErrorHandlers, offset, null);
  }
}

function $initializeRemainingInitialFragments(this$static){
  var sp, sp$array, sp$index, sp$max;
  if (!this$static.remainingInitialFragments) {
    this$static.remainingInitialFragments = new AsyncFragmentLoader$BoundedIntQueue(this$static.initialLoadSequence.length + 1);
    for (sp$array = this$static.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
      sp = sp$array[sp$index];
      $add(this$static.remainingInitialFragments, sp);
    }
    $add(this$static.remainingInitialFragments, this$static.numEntries);
  }
}

function $inject_1(this$static, splitPoint, loadErrorHandler){
  setCheck(this$static.pendingDownloadErrorHandlers, splitPoint, loadErrorHandler);
  $isInitial(this$static, splitPoint) || $add(this$static.requestedExclusives, splitPoint);
  $startLoadingNextFragment(this$static);
}

function $isEmpty(array){
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i]) {
      return false;
    }
  }
  return true;
}

function $isInitial(this$static, splitPoint){
  var sp, sp$array, sp$index, sp$max;
  if (splitPoint == this$static.numEntries) {
    return true;
  }
  for (sp$array = this$static.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
    sp = sp$array[sp$index];
    if (sp == splitPoint) {
      return true;
    }
  }
  return false;
}

function $logEventProgress(eventGroup, fragment){
  $isStatsAvailable() && stats($createStatsEvent(eventGroup, 'begin', fragment, -1));
}

function $onLoadImpl(this$static, fragment){
  var callback, callback$array, callback$index, callback$max, callbacks, t, logGroup;
  logGroup = fragment == this$static.numEntries?'leftoversDownload':'download' + fragment;
  $isStatsAvailable() && stats($createStatsEvent(logGroup, 'end', fragment, -1));
  fragment < this$static.pendingDownloadErrorHandlers.length && setCheck(this$static.pendingDownloadErrorHandlers, fragment, null);
  $isInitial(this$static, fragment) && $remove(this$static.remainingInitialFragments);
  this$static.fragmentLoading = -1;
  this$static.isLoaded[fragment] = true;
  $startLoadingNextFragment(this$static);
  callbacks = this$static.allCallbacks[fragment];
  if (callbacks != null) {
    $isStatsAvailable() && stats($createStatsEvent('runCallbacks' + fragment, 'begin', -1, -1));
    setCheck(this$static.allCallbacks, fragment, null);
    for (callback$array = callbacks , callback$index = 0 , callback$max = callbacks.length; callback$index < callback$max; ++callback$index) {
      callback = callback$array[callback$index];
      try {
        dynamicCast(callback, 108).onSuccess_0();
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 8)) {
          t = $e0;
          reportToBrowser(instanceOf(t, 30)?dynamicCast(t, 30).getThrown():t);
        }
         else 
          throw unwrap($e0);
      }
    }
    $isStatsAvailable() && stats($createStatsEvent('runCallbacks' + fragment, 'end', -1, -1));
  }
}

function $runAsyncImpl(this$static, fragment, callback){
  var callbacks;
  if (this$static.isLoaded[fragment]) {
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new OnSuccessExecutor$1(callback));
    return;
  }
  callbacks = this$static.allCallbacks[fragment];
  callbacks == null && (callbacks = setCheck(this$static.allCallbacks, fragment, initDim(Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit, $intern_4, 108, 0, 0, 1)));
  setCheck(callbacks, callbacks.length, callback);
  !!this$static.pendingDownloadErrorHandlers[fragment] || $inject_1(this$static, fragment, new AsyncFragmentLoader$1(this$static, fragment));
}

function $startLoadingFragment(this$static, fragment){
  this$static.fragmentLoading = fragment;
  $logEventProgress(fragment == this$static.numEntries?'leftoversDownload':'download' + fragment, fragment);
  $startLoadingFragment_0(this$static.loadingStrategy, fragment, new AsyncFragmentLoader$ResetAfterDownloadFailure(this$static, fragment));
}

function $startLoadingNextFragment(this$static){
  if (this$static.fragmentLoading >= 0) {
    return;
  }
  $initializeRemainingInitialFragments(this$static);
  $clearRequestsAlreadyLoaded(this$static);
  if ($isEmpty(this$static.pendingDownloadErrorHandlers)) {
    return;
  }
  if ($size(this$static.remainingInitialFragments) > 0) {
    $startLoadingFragment(this$static, $peek(this$static.remainingInitialFragments));
    return;
  }
  if ($size(this$static.requestedExclusives) > 0) {
    $startLoadingFragment(this$static, $remove(this$static.requestedExclusives));
    return;
  }
}

function AsyncFragmentLoader(numEntries, initialLoadSequence, loadingStrategy){
  var numEntriesPlusOne;
  this.numEntries = numEntries;
  this.initialLoadSequence = initialLoadSequence;
  this.loadingStrategy = loadingStrategy;
  numEntriesPlusOne = numEntries + 1;
  this.allCallbacks = initDim(Ljava_lang_Object_2_classLit, $intern_4, 5, numEntriesPlusOne, 0, 2);
  this.requestedExclusives = new AsyncFragmentLoader$BoundedIntQueue(numEntriesPlusOne);
  this.isLoaded = initDim(Z_classLit, {3:1}, 0, numEntriesPlusOne, 8, 1);
  this.pendingDownloadErrorHandlers = initDim(Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, $intern_4, 110, numEntriesPlusOne, 0, 1);
}

function onLoad(fragment){
  $onLoadImpl(BROWSER_LOADER, fragment);
}

function runAsync(fragment, callback){
  $clinit_AsyncFragmentLoader();
  $runAsyncImpl(BROWSER_LOADER, fragment, callback);
}

defineClass(156, 1, {}, AsyncFragmentLoader);
_.fragmentLoading = -1;
_.numEntries = 0;
_.remainingInitialFragments = null;
var BROWSER_LOADER;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader', 156);
function AsyncFragmentLoader$1(this$0, val$fragment){
  this.this$01 = this$0;
  this.val$fragment2 = val$fragment;
}

defineClass(158, 1, {110:1}, AsyncFragmentLoader$1);
_.loadTerminated = function loadTerminated(reason){
  var callback, callback$index, callback$max, callbacks;
  callbacks = this.this$01.allCallbacks[this.val$fragment2];
  if (callbacks != null) {
    setCheck(this.this$01.allCallbacks, this.val$fragment2, null);
    for (callback$index = 0 , callback$max = callbacks.length; callback$index < callback$max; ++callback$index) {
      callback = callbacks[callback$index];
      $onFailure_1(dynamicCast(callback, 108), reason);
    }
  }
}
;
_.val$fragment2 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/1', 158);
function $add(this$static, x_0){
  this$static.array[this$static.write_0++] = x_0;
}

function $clear(this$static){
  this$static.read = 0;
  this$static.write_0 = 0;
}

function $peek(this$static){
  return this$static.array[this$static.read];
}

function $remove(this$static){
  return this$static.array[this$static.read++];
}

function $size(this$static){
  return this$static.write_0 - this$static.read;
}

function AsyncFragmentLoader$BoundedIntQueue(maxPuts){
  this.array = initDim(I_classLit, {3:1}, 0, maxPuts, 7, 1);
}

defineClass(109, 1, {}, AsyncFragmentLoader$BoundedIntQueue);
_.read = 0;
_.write_0 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$BoundedIntQueue_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/BoundedIntQueue', 109);
function AsyncFragmentLoader$HttpDownloadFailure(url_0){
  RuntimeException_0.call(this, 'Download of ' + url_0 + ' failed with status ' + 404 + '(' + 'Script Tag Failure - no status available' + ')');
}

defineClass(160, 7, $intern_3, AsyncFragmentLoader$HttpDownloadFailure);
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpDownloadFailure', 160);
function AsyncFragmentLoader$HttpInstallFailure(url_0, text_0, rootCause){
  RuntimeException_1.call(this, 'Install of ' + url_0 + ' failed with text ' + text_0, rootCause);
}

defineClass(161, 7, $intern_3, AsyncFragmentLoader$HttpInstallFailure);
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpInstallFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpInstallFailure', 161);
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadTerminatedHandler');
function $loadTerminated(this$static, reason){
  var e, handler, handler$array, handler$index, handler$max, handlersToRun, lastException;
  if (this$static.this$01.fragmentLoading != this$static.fragment_0) {
    return;
  }
  handlersToRun = this$static.this$01.pendingDownloadErrorHandlers;
  this$static.this$01.pendingDownloadErrorHandlers = initDim(Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, $intern_4, 110, this$static.this$01.numEntries + 1, 0, 1);
  $clear(this$static.this$01.requestedExclusives);
  this$static.this$01.fragmentLoading = -1;
  lastException = null;
  for (handler$array = handlersToRun , handler$index = 0 , handler$max = handlersToRun.length; handler$index < handler$max; ++handler$index) {
    handler = handler$array[handler$index];
    if (handler) {
      try {
        handler.loadTerminated(reason);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 7)) {
          e = $e0;
          lastException = e;
        }
         else 
          throw unwrap($e0);
      }
    }
  }
  if (lastException) {
    throw unwrap(lastException);
  }
}

function AsyncFragmentLoader$ResetAfterDownloadFailure(this$0, myFragment){
  this.this$01 = this$0;
  this.fragment_0 = myFragment;
}

defineClass(159, 1, {110:1}, AsyncFragmentLoader$ResetAfterDownloadFailure);
_.loadTerminated = function loadTerminated_0(reason){
  $loadTerminated(this, reason);
}
;
_.fragment_0 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$ResetAfterDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/ResetAfterDownloadFailure', 159);
function $createStatsEvent(eventGroup, type_0, fragment, size_0){
  var evt = {moduleName:$moduleName, sessionId:$sessionId, subSystem:'runAsync', evtGroup:eventGroup, millis:(new Date).getTime(), type:type_0};
  fragment >= 0 && (evt.fragment = fragment);
  size_0 >= 0 && (evt.size = size_0);
  return evt;
}

function $isStatsAvailable(){
  return !!$stats;
}

function stats(data_0){
  return $stats(data_0);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      __0 != null && (__0 = __0.val);
      return __0;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function getModuleBaseURL(){
  var key = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global = $wnd || self;
  return global[key] || $moduleBase;
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $startLoadingFragment_0(this$static, fragment, loadErrorHandler){
  var connector, manualRetry, request, url_0, ser;
  url_0 = gwtStartLoadingFragment(fragment, loadErrorHandler);
  if (url_0 == null) {
    return;
  }
  manualRetry = (ser = $get(this$static.manualRetryNumbers, fragment) , this$static.manualRetryNumbers[fragment] = ser + 1 , ser);
  if (manualRetry > 0) {
    connector = url_0.indexOf('?') != -1?38:63;
    url_0 += charToString(connector) + 'manualRetry=' + manualRetry;
  }
  request = new LoadingStrategyBase$RequestData(url_0, loadErrorHandler, fragment, MAX_AUTO_RETRY_COUNT);
  setAsyncCallback(request.fragment_0, request);
  $inject_0($setCallback($setRemoveTag(($clinit_ScriptInjector() , new ScriptInjector$FromUrl(request.url_0))), new ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(request)));
}

function gwtStartLoadingFragment(fragment, loadErrorHandler){
  function loadFailed(e){
    loadErrorHandler.loadTerminated(e);
  }

  return __gwtStartLoadingFragment(fragment, $entry(loadFailed));
}

defineClass(168, 1, {});
var MAX_AUTO_RETRY_COUNT = 3;
var Lcom_google_gwt_core_client_impl_LoadingStrategyBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase', 168);
function $get(this$static, x_0){
  return this$static[x_0]?this$static[x_0]:0;
}

function $onLoadError(this$static, e, mayRetry){
  var connector;
  if (mayRetry) {
    ++this$static.retryCount;
    if (this$static.retryCount <= this$static.maxRetryCount) {
      connector = this$static.originalUrl.indexOf('?') != -1?38:63;
      this$static.url_0 = this$static.originalUrl + charToString(connector) + 'autoRetry=' + this$static.retryCount;
      setAsyncCallback(this$static.fragment_0, this$static);
      $inject_0($setCallback($setRemoveTag(($clinit_ScriptInjector() , new ScriptInjector$FromUrl(this$static.url_0))), new ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(this$static)));
      return;
    }
  }
  $loadTerminated(this$static.errorHandler, e);
}

function $tryInstall(this$static, code_0){
  var e, textIntro;
  try {
    __gwtInstallCode(code_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      textIntro = code_0;
      code_0 != null && code_0.length > 200 && (textIntro = code_0.substr(0, 200) + '...');
      $onLoadError(this$static, new AsyncFragmentLoader$HttpInstallFailure(this$static.url_0, textIntro, e), false);
    }
     else 
      throw unwrap($e0);
  }
}

function LoadingStrategyBase$RequestData(url_0, errorHandler, fragment, maxRetryCount){
  this.url_0 = url_0;
  this.originalUrl = url_0;
  this.errorHandler = errorHandler;
  this.maxRetryCount = maxRetryCount;
  this.retryCount = 0;
  this.fragment_0 = fragment;
}

defineClass(169, 1, {}, LoadingStrategyBase$RequestData);
_.errorHandler = null;
_.fragment_0 = 0;
_.maxRetryCount = 0;
_.retryCount = 0;
var Lcom_google_gwt_core_client_impl_LoadingStrategyBase$RequestData_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase/RequestData', 169);
function OnSuccessExecutor$1(val$callback){
  this.val$callback3 = val$callback;
}

defineClass(157, 1, {}, OnSuccessExecutor$1);
_.execute_1 = function execute_0(){
  this.val$callback3.onSuccess_0();
}
;
var Lcom_google_gwt_core_client_impl_OnSuccessExecutor$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'OnSuccessExecutor/1', 157);
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && $push(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function SchedulerImpl(){
}

function execute_1(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute_1();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 8)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 30)?dynamicCast(e, 30).getThrown():e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_1)(cmd);
    !isScript() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(184, 430, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 184);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(185, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 185);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(186, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_3(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 186);
function ScriptTagLoadingStrategy(){
  this.manualRetryNumbers = [];
}

function asyncCallback(request, code_0){
  var firstTimeCalled;
  firstTimeCalled = clearAsyncCallback(request.fragment_0);
  firstTimeCalled && $tryInstall(request, code_0);
}

function cleanup(request){
  var neverCalled;
  neverCalled = clearAsyncCallback(request.fragment_0);
  neverCalled && $onLoadError(request, new AsyncFragmentLoader$HttpDownloadFailure(request.url_0), true);
}

function clearAsyncCallback(fragment){
  if (!__gwtModuleFunction['runAsyncCallback' + fragment]) {
    return false;
  }
  delete __gwtModuleFunction['runAsyncCallback' + fragment];
  return true;
}

function setAsyncCallback(fragment, request){
  __gwtModuleFunction['runAsyncCallback' + fragment] = $entry(function(code_0, instance){
    asyncCallback(request, code_0);
  }
  );
}

defineClass(155, 168, {}, ScriptTagLoadingStrategy);
var Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy', 155);
function $onFailure(this$static){
  cleanup(this$static.val$request2);
}

function $onSuccess(this$static){
  cleanup(this$static.val$request2);
}

function ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(val$request){
  this.val$request2 = val$request;
}

defineClass(116, 1, {}, ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1);
_.onFailure = function onFailure(reason){
  $onFailure(this, dynamicCast(reason, 10));
}
;
_.onSuccess = function onSuccess(result){
  $onSuccess(this, throwClassCastExceptionUnlessNull(result));
}
;
var Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy/ScriptTagDownloadStrategy/1', 116);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

var collector;
defineClass(441, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 441);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(164, 441, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 164);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

defineClass(442, 441, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 442);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(165, 442, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 165);
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function checkState_0(expression){
  if (!expression) {
    throw new IllegalStateException_0("Can't overwrite cause");
  }
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $removeFromParent(this$static){
  var parent_0;
  parent_0 = $getParentElement(this$static);
  !!parent_0 && parent_0.removeChild(this$static);
}

function $replaceChild(this$static, newChild, oldChild){
  return this$static.replaceChild(newChild, oldChild);
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $getSubPixelOffsetWidth(this$static){
  return this$static.offsetWidth || 0;
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $createInputElement(doc, type_0){
  var e = doc.createElement('INPUT');
  e.type = type_0;
  return e;
}

function $eventGetKeyCode(evt){
  return evt.keyCode | 0;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $isOrHasChild(parent_0, child){
  return parent_0.contains(child);
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $createButtonElement(doc, type_0){
  var e = doc.createElement('BUTTON');
  e.setAttribute('type', type_0);
  return e;
}

function $eventGetCurrentTarget(event_0){
  return event_0.currentTarget || $wnd;
}

function $getTabIndex(elem){
  return typeof elem.tabIndex != 'undefined'?elem.tabIndex:-1;
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getClientHeight(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(4, 1, {3:1, 6:1, 4:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, dynamicCast(other, 4));
}
;
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 4);
function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Style$Display();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_4, 11, 0, [NONE, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL]);
}

defineClass(11, 4, $intern_5);
var BLOCK, INITIAL, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, NONE, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 11, Ljava_lang_Enum_2_classLit, values_0);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(275, 11, $intern_5, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 275, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(284, 11, $intern_5, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 284, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(285, 11, $intern_5, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 285, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(286, 11, $intern_5, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 286, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(287, 11, $intern_5, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 287, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(288, 11, $intern_5, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 288, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(289, 11, $intern_5, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 289, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(290, 11, $intern_5, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 290, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(291, 11, $intern_5, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 291, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(276, 11, $intern_5, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 276, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(277, 11, $intern_5, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 277, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(278, 11, $intern_5, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 278, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(279, 11, $intern_5, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 279, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(280, 11, $intern_5, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 280, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(281, 11, $intern_5, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 281, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(282, 11, $intern_5, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 282, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(283, 11, $intern_5, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 283, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN_0 = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$Overflow();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_4, 35, 0, [VISIBLE, HIDDEN_0, SCROLL, AUTO]);
}

defineClass(35, 4, $intern_6);
var AUTO, HIDDEN_0, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 35, Ljava_lang_Enum_2_classLit, values_1);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(292, 35, $intern_6, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 292, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(293, 35, $intern_6, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 293, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(294, 35, $intern_6, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 294, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(295, 35, $intern_6, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 295, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$Position();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_4, 36, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(36, 4, $intern_7);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 36, Ljava_lang_Enum_2_classLit, values_2);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(296, 36, $intern_7, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 296, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(297, 36, $intern_7, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 297, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(298, 36, $intern_7, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 298, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(299, 36, $intern_7, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 299, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$TextAlign();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_4, 37, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(37, 4, $intern_8);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 37, Ljava_lang_Enum_2_classLit, values_3);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(300, 37, $intern_8, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 300, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(301, 37, $intern_8, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 301, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(302, 37, $intern_8, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 302, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(303, 37, $intern_8, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 303, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Unit();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_4, 20, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(20, 4, $intern_9);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 20, Ljava_lang_Enum_2_classLit, values_4);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(266, 20, $intern_9, Style$Unit$1);
_.getType = function getType(){
  return 'px';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 266, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(267, 20, $intern_9, Style$Unit$2);
_.getType = function getType_0(){
  return '%';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 267, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(268, 20, $intern_9, Style$Unit$3);
_.getType = function getType_1(){
  return 'em';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 268, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(269, 20, $intern_9, Style$Unit$4);
_.getType = function getType_2(){
  return 'ex';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 269, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(270, 20, $intern_9, Style$Unit$5);
_.getType = function getType_3(){
  return 'pt';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 270, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(271, 20, $intern_9, Style$Unit$6);
_.getType = function getType_4(){
  return 'pc';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 271, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(272, 20, $intern_9, Style$Unit$7);
_.getType = function getType_5(){
  return 'in';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 272, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(273, 20, $intern_9, Style$Unit$8);
_.getType = function getType_6(){
  return 'cm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 273, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(274, 20, $intern_9, Style$Unit$9);
_.getType = function getType_7(){
  return 'mm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 274, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_1 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$Visibility();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_4, 61, 0, [VISIBLE_0, HIDDEN_1]);
}

defineClass(61, 4, $intern_10);
var HIDDEN_1, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 61, Ljava_lang_Enum_2_classLit, values_5);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(304, 61, $intern_10, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 304, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(305, 61, $intern_10, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 305, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
defineClass(449, 1, {});
_.toString$ = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 449);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(450, 449, {});
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 450);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 17);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next_0(), 82);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(456, 450, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 456);
defineClass(457, 456, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 457);
defineClass(458, 457, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 458);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(330, 458, {}, ClickEvent);
_.dispatch = function dispatch(handler){
  dynamicCast(handler, 85).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 330);
defineClass(197, 1, {});
_.hashCode$ = function hashCode_2(){
  return this.index_0;
}
;
_.toString$ = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 197);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(19, 197, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 19);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 17);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_2(this);
  this.name_0 = eventName;
}

defineClass(82, 19, {82:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 82);
defineClass(461, 456, {});
var Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyEvent', 461);
function $clinit_KeyPressEvent(){
  $clinit_KeyPressEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('keypress', new KeyPressEvent);
}

function KeyPressEvent(){
}

defineClass(373, 461, {}, KeyPressEvent);
_.dispatch = function dispatch_0(handler){
  dynamicCast(handler, 429).onKeyPress(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyPressEvent', 373);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(361, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 361);
function AttachEvent(){
}

function fire_0(source){
  var event_0;
  if (TYPE_1) {
    event_0 = new AttachEvent;
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineClass(196, 450, {}, AttachEvent);
_.dispatch = function dispatch_1(handler){
  dynamicCast(handler, 471);
}
;
_.getAssociatedType = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_logical_shared_AttachEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'AttachEvent', 196);
function CloseEvent_0(){
}

function fire_1(source){
  var event_0;
  if (TYPE_2) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(265, 450, {}, CloseEvent_0);
_.dispatch = function dispatch_2(handler){
  dynamicCast(handler, 473);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 265);
function ResizeEvent(){
}

function fire_2(source){
  var event_0;
  if (TYPE_3) {
    event_0 = new ResizeEvent;
    $fireEvent(source, event_0);
  }
}

defineClass(392, 450, {}, ResizeEvent);
_.dispatch = function dispatch_3(handler){
  $onResize(dynamicCast(handler, 474).this$01);
}
;
_.getAssociatedType = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 392);
function $dispatch(this$static, handler){
  $handleTokenChange(handler, this$static.value_0);
}

function ValueChangeEvent(value_0){
  this.value_0 = value_0;
}

function fire_3(source, value_0){
  var event_0;
  if (TYPE_4) {
    event_0 = new ValueChangeEvent(value_0);
    $fireEvent(source.handlers, event_0);
  }
}

defineClass(257, 450, {}, ValueChangeEvent);
_.dispatch = function dispatch_4(handler){
  $dispatch(this, dynamicCast(handler, 426));
}
;
_.getAssociatedType = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 257);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0, null);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 59)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function HandlerManager(source){
  this.eventBus = new HandlerManager$Bus;
  this.source = source;
}

defineClass(67, 1, $intern_11, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 67);
defineClass(452, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 452);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_3(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  if (handler == null) {
    throw new NullPointerException_0('Cannot add a null handler');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_2(handler);
}

function $doFire(this$static, event_0, source){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    source != null && (event_0.source = source);
    handlers = $getDispatchList(this$static, event_0.getAssociatedType(), source);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        event_0.dispatch(dynamicCast(handler, 28));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 8)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_7(causes, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_0(handler);
  removed && l.isEmpty() && (sourceMap = dynamicCast(this$static.map_0.get_3(type_0), 32) , dynamicCast(sourceMap.remove_3(source), 17) , sourceMap.isEmpty() && this$static.map_0.remove_3(type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_3(type_0), 32);
  if (!sourceMap) {
    sourceMap = new HashMap;
    this$static.map_0.put(type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_3(source), 17);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0, source){
  var directHandlers, globalHandlers, rtn;
  directHandlers = $getHandlerList(this$static, type_0, source);
  if (source == null) {
    return directHandlers;
  }
  globalHandlers = $getHandlerList(this$static, type_0, null);
  rtn = new ArrayList_0(directHandlers);
  $addAll_0(rtn, globalHandlers);
  return rtn;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_3(type_0), 32);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get_3(source), 17);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_0(c$iterator.last = c$iterator.i++), 428));
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function SimpleEventBus(){
  SimpleEventBus_0.call(this);
}

function SimpleEventBus_0(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(93, 452, {}, SimpleEventBus);
_.addHandler = function addHandler(type_0, handler){
  return $doAdd(this, type_0, handler);
}
;
_.doRemove = function doRemove(type_0, source, handler){
  this.firingDepth > 0?$defer(this, new SimpleEventBus$3(this, type_0, source, handler)):$doRemoveNow(this, type_0, source, handler);
}
;
_.fireEvent = function fireEvent(event_0){
  $doFire(this, event_0, null);
}
;
_.fireEventFromSource = function fireEventFromSource(event_0, source){
  $doFire(this, event_0, source);
}
;
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 93);
function HandlerManager$Bus(){
  SimpleEventBus_0.call(this);
}

defineClass(232, 93, {}, HandlerManager$Bus);
_.doRemove = function doRemove_0(type_0, source, handler){
  this.firingDepth > 0?$defer(this, new SimpleEventBus$3(this, type_0, source, handler)):$doRemoveNow(this, type_0, source, handler);
}
;
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 232);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(258, 1, {422:1}, LegacyHandlerWrapper);
_.removeHandler = function removeHandler(){
  $removeHandler(this.real);
}
;
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 258);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next_0(), 8);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next_0(), 8);
    first?(first = false):(b.string += '; ' , b);
    $append_0(b, t.getMessage());
  }
  return b.string;
}

defineClass(59, 7, $intern_12, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 59);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(132, 59, $intern_12, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 132);
function $$init(this$static){
  this$static.timer = new Request$1(this$static);
}

function $cancel_1(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new ResponseImpl(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  $onError(this$static.callback, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request(xmlHttpRequest, timeoutMillis, callback){
  $$init(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException;
  }
  if (!callback) {
    throw new NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException;
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(145, 1, {}, Request);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 145);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(387, 146, {}, Request$1);
_.run = function run_0(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 387);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  POST = new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 30)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw unwrap($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 30)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    }
     else 
      throw unwrap($e1);
  }
  return request;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers && (this$static.headers = new HashMap);
  this$static.headers.put(header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size_1() > 0) {
    for (header$iterator = this$static.headers.entrySet().iterator(); header$iterator.hasNext();) {
      header = dynamicCast(header$iterator.next_0(), 14);
      try {
        $setRequestHeader(xmlHttpRequest, dynamicCastToString(header.getKey()), dynamicCastToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 30)) {
          e = $e0;
          throw new RequestException(e.getMessage());
        }
         else 
          throw unwrap($e0);
      }
    }
  }
   else {
    $setRequestHeader(xmlHttpRequest, 'Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(150, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 150);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(410, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 410);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(75, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_5(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 75);
function RequestException(message){
  Exception_0.call(this, message);
}

defineClass(46, 10, $intern_13, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 46);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(412, 46, $intern_13, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 412);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(421, 46, $intern_13, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 421);
defineClass(463, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 463);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(386, 463, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 386);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_HasDirection$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_4, 69, 0, [RTL, LTR, DEFAULT]);
}

defineClass(69, 4, {69:1, 3:1, 6:1, 4:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 69, Ljava_lang_Enum_2_classLit, values_6);
function cloneSubrange(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function createFrom(array, length_0){
  var result;
  result = initializeArrayElementsWithDefaults(0, length_0);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function nativeArraySplice(src_0, srcOfs, dest, destOfs, len, overwrite){
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    Array.prototype.splice.apply(dest, [destOfs, overwrite?len:0].concat(src_0.slice(batchStart, batchEnd)));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 30)) {
    jse = dynamicCast(e, 30);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 8)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_14;
  a1 = value_0 >> 22 & $intern_14;
  a2 = value_0 < 0?1048575:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_4, 481, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value_0));
    return result;
  }
  return create(value_0);
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_14, $intern_14, 524287);
  MIN_VALUE = create0(0, 0, $intern_15);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  var builder, builder_0;
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  typeof $wnd['jQuery'] !== 'undefined' || $inject($setWindow(($clinit_ScriptInjector() , new ScriptInjector$FromString((builder = new StringBuilder , builder.string += '/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */\n!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g,p=/^-ms-/,q=/-([\\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\\\x20\\\\t\\\\r\\\\n\\\\f]",M="(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+",N="\\\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\"|("+M+"))|)"+L+"*\\\\]",O=":("+M+")(?:\\\\(((\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|"+N+")*)|.*)\\\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\\\]\'\\"]*?)"+L+"*\\\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\("+L+"*(even|odd|(([+-]|)(\\\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\\\d+)|))"+L+"*\\\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\("+L+"*((?:-\\\\d)?\\\\d*)"+L+"*\\\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\\d$/i,Z=/^[^{]+\\{\\s*\\[native \\w/,$=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,_=/[+~]/,aa=/\'|\\\\/g,ba=new RegExp("\\\\\\\\([\\\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id=\'"+k+"\']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id=\'"+u+"\'><\/a><select id=\'"+u+"-\\r\\\\\' msallowcapture=\'\'><option selected=\'\'><\/option><\/select>",a.querySelectorAll("[msallowcapture^=\'\']").length&&q.push("[*^$]="+L+"*(?:\'\'|\\"\\")"),a.querySelectorAll("[selected]").length||q.push("\\\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!=\'\']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"=\'$1\']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b' , builder.string += '){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href=\'#\'><\/a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\\w-]+)\\s*\\/?>(?:<\\/\\1>|)$/,y=/^.[^:#\\[\\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;\n}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=' , builder.string += 'c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\\w:-]+)/,_=/^$|\\/(?:java|ecma)script/i,aa=/^\\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table><\/table><a href=\'/a\'>a<\/a><input type=\'checkbox\'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav><\/:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x<\/textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple=\'multiple\'>","<\/select>"],legend:[1,"<fieldset>","<\/fieldset>"],area:[1,"<map>","<\/map>"],param:[1,"<object>","<\/object>"],thead:[1,"<table>","<\/table>"],tr:[2,"<table><tbody>","<\/tbody><\/table>"],col:[2,"<table><tbody><\/tbody><colgroup>","<\/colgroup><\/table>"],td:[3,"<table><tbody><tr>","<\/tr><\/tbody><\/table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","<\/div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\\\.)"+p.join("\\\\.(?:.*\\\\.|)")+"(\\\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\\\.)"+r.join("\\\\.(?:.*\\\\.|)")+"(\\\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(thi' , builder.string += 's,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\\d+="(?:null|\\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:-]+)[^>]*)\\/>/gi,wa=/<script|<style|<link/i,xa=/checked\\s*(?:[^=]|=\\s*.checked.)/i,ya=/^true\\/(.*)/,za=/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1><\/$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td><\/td><td>t<\/td><\/tr><\/table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\\([^)]*\\)/i,Wa=/opacity\\s*=\\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{\nmarginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.opti' , builder.string += 'ons.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table><\/table><a href=\'/a\'>a<\/a><input type=\'checkbox\'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\\r/g,sb=/[\\x20\\t\\r\\n\\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\\t\\r\\n\\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\\?/,Gb=/(,)|(\\[|{)|(}|])|"(?:[^"\\\\\\r\\n]|\\\\["\\\\\\/bfnrt]|\\\\u[\\da-fA-F]{4})*"\\s*:?|true|false|null|-?(?!0\\d)\\d+(?:\\.\\d+|)(?:[eE][+-]?\\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \\t]*([^\\r\\n]*)\\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\\/\\//,Nb=/^([\\w.+-]+:)(?:\\/\\/(?:[^\\/?#]*@|)([^\\/?#:]*)(?::(\\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h' , builder.string += '){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\\bxml\\b/,html:/\\bhtml/,json:/\\bjson\\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\\[\\]$/,ac=/\\r?\\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\\r\\n")}}):{name:b.name,value:c.replace(ac,"\\r\\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\\b(?:java|ecma)script\\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\\?(?=&|$)|\\?\\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({\npadding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});\n' , builder.string))), TOP_WINDOW));
  typeof $wnd['jQuery'].fn.emulateTransitionEnd !== 'undefined' || $inject($setWindow(($clinit_ScriptInjector() , new ScriptInjector$FromString((builder_0 = new StringBuilder , builder_0.string += '/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under the MIT license\n */\nif("undefined"==typeof jQuery)throw new Error("Bootstrap\'s JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c=\'[data-dismiss="alert"]\',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest(\'[data-toggle="buttons"]\');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",\'[data-toggle^="button"]\',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is(\'input[type="radio"], input[type="checkbox"]\')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",\'[data-toggle^="button"]\',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a(\'[data-ride="carousel"]\').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(\'[data-toggle="collapse"][href="#\'+b.id+\'"],[data-toggle="collapse"][data-target="#\'+b.id+\'"]\'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find(\'[data-toggle="collapse"][data-parent="\'+this.options.parent+\'"]\').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",\'[data-toggle="collapse"]\',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f=\'[data-toggle="dropdown"]\',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",\'[data-dismiss="modal"]\',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){doc' , builder_0.string += 'ument===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",\'[data-toggle="modal"]\',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:\'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>\',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\\s?auto?\\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:\'<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>\'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){\nthis.activeTarget=b,this.clear();var c=this.selector+\'[data-target="\'+b+\'"],\'+this.selector+\'[href="\'+b+\'"]\',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a(\'[data-spy="scroll"]\').each(function(' , builder_0.string += '){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find(\'[data-toggle="tab"]\').attr("aria-expanded",!1),b.addClass("active").find(\'[data-toggle="tab"]\').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find(\'[data-toggle="tab"]\').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",\'[data-toggle="tab"]\',e).on("click.bs.tab.data-api",\'[data-toggle="pill"]\',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a(\'[data-spy="affix"]\').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);' , builder_0.string))), TOP_WINDOW));
  bind_0(($clinit_ClientGinjector() , SINGLETON));
  $handleTokenChange($get_Key$type$com$gwtplatform$mvp$client$DefaultBootstrapper$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(SINGLETON.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector)).placeManager, ($clinit_History() , $clinit_History() , token_0));
}

function $adjustHorizontalConstraints(this$static, parentWidth, l){
  var leftPx, rightPx, widthPx;
  leftPx = l.left * $getUnitSize(this$static, l.leftUnit, false);
  rightPx = l.right * $getUnitSize(this$static, l.rightUnit, false);
  widthPx = l.width_0 * $getUnitSize(this$static, l.widthUnit, false);
  if (l.setLeft && !l.setTargetLeft) {
    l.setLeft = false;
    if (l.setWidth) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
   else if (l.setWidth && !l.setTargetWidth) {
    l.setWidth = false;
    if (l.setLeft) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
  }
   else if (l.setRight && !l.setTargetRight) {
    l.setRight = false;
    if (l.setWidth) {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
  l.setLeft = l.setTargetLeft;
  l.setRight = l.setTargetRight;
  l.setWidth = l.setTargetWidth;
  l.leftUnit = l.targetLeftUnit;
  l.rightUnit = l.targetRightUnit;
  l.widthUnit = l.targetWidthUnit;
}

function $adjustVerticalConstraints(this$static, parentHeight, l){
  var bottomPx, heightPx, topPx;
  topPx = l.top_0 * $getUnitSize(this$static, l.topUnit, true);
  bottomPx = l.bottom * $getUnitSize(this$static, l.bottomUnit, true);
  heightPx = l.height * $getUnitSize(this$static, l.heightUnit, true);
  if (l.setTop && !l.setTargetTop) {
    l.setTop = false;
    if (l.setHeight) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
   else if (l.setHeight && !l.setTargetHeight) {
    l.setHeight = false;
    if (l.setTop) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
  }
   else if (l.setBottom && !l.setTargetBottom) {
    l.setBottom = false;
    if (l.setHeight) {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
  l.setTop = l.setTargetTop;
  l.setBottom = l.setTargetBottom;
  l.setHeight = l.setTargetHeight;
  l.topUnit = l.targetTopUnit;
  l.bottomUnit = l.targetBottomUnit;
  l.heightUnit = l.targetHeightUnit;
}

function $attachChild(this$static, child){
  var container, layer;
  container = $attachChild_0(this$static.parentElem, child);
  layer = new Layout$Layer(container, child);
  $add_3(this$static.layers, layer);
  return layer;
}

function $getUnitSize(this$static, unit, vertical){
  return $getUnitSizeInPixels(this$static.impl, this$static.parentElem, unit, vertical);
}

function $layout(this$static, duration){
  var l, l$iterator, l$iterator0, parentHeight, parentWidth;
  !!this$static.animation && $cancel(this$static.animation);
  if (duration == 0) {
    for (l$iterator0 = new AbstractList$IteratorImpl(this$static.layers); l$iterator0.i < l$iterator0.this$01_0.size_1();) {
      l = (checkCriticalElement(l$iterator0.i < l$iterator0.this$01_0.size_1()) , dynamicCast(l$iterator0.this$01_0.get_0(l$iterator0.last = l$iterator0.i++), 74));
      l.left = l.sourceLeft = l.targetLeft;
      l.top_0 = l.sourceTop = l.targetTop;
      l.right = l.sourceRight = l.targetRight;
      l.bottom = l.sourceBottom = l.targetBottom;
      l.width_0 = l.sourceWidth = l.targetWidth;
      l.height = l.sourceHeight = l.targetHeight;
      l.setLeft = l.setTargetLeft;
      l.setTop = l.setTargetTop;
      l.setRight = l.setTargetRight;
      l.setBottom = l.setTargetBottom;
      l.setWidth = l.setTargetWidth;
      l.setHeight = l.setTargetHeight;
      l.leftUnit = l.targetLeftUnit;
      l.topUnit = l.targetTopUnit;
      l.rightUnit = l.targetRightUnit;
      l.bottomUnit = l.targetBottomUnit;
      l.widthUnit = l.targetWidthUnit;
      l.heightUnit = l.targetHeightUnit;
      $layout_0(l);
    }
    return;
  }
  parentWidth = this$static.parentElem.clientWidth | 0;
  parentHeight = this$static.parentElem.clientHeight | 0;
  for (l$iterator = new AbstractList$IteratorImpl(this$static.layers); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_0(l$iterator.last = l$iterator.i++), 74));
    $adjustHorizontalConstraints(this$static, parentWidth, l);
    $adjustVerticalConstraints(this$static, parentHeight, l);
  }
  this$static.animation = new Layout$1(this$static);
  $run_0(this$static.animation, duration, this$static.parentElem);
}

function $removeChild_0(this$static, layer){
  $removeChild_1(layer.container, layer.child);
  $remove_2(this$static.layers, layer);
}

function Layout(parent_0){
  this.impl = new LayoutImpl;
  this.layers = new ArrayList;
  this.parentElem = parent_0;
  $initParent(this.impl, parent_0);
}

defineClass(388, 1, {}, Layout);
var Lcom_google_gwt_layout_client_Layout_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout', 388);
function $onUpdate(this$static, progress){
  var l, l$iterator;
  for (l$iterator = new AbstractList$IteratorImpl(this$static.this$01.layers); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_0(l$iterator.last = l$iterator.i++), 74));
    l.setTargetLeft && (l.left = l.sourceLeft + (l.targetLeft - l.sourceLeft) * progress);
    l.setTargetRight && (l.right = l.sourceRight + (l.targetRight - l.sourceRight) * progress);
    l.setTargetTop && (l.top_0 = l.sourceTop + (l.targetTop - l.sourceTop) * progress);
    l.setTargetBottom && (l.bottom = l.sourceBottom + (l.targetBottom - l.sourceBottom) * progress);
    l.setTargetWidth && (l.width_0 = l.sourceWidth + (l.targetWidth - l.sourceWidth) * progress);
    l.setTargetHeight && (l.height = l.sourceHeight + (l.targetHeight - l.sourceHeight) * progress);
    $layout_0(l);
  }
}

function Layout$1(this$0){
  this.this$01 = this$0;
  Animation.call(this, (!instance_0 && (instance_0 = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance_0));
}

defineClass(389, 147, {}, Layout$1);
var Lcom_google_gwt_layout_client_Layout$1_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/1', 389);
function Layout$Layer(container, child){
  this.targetLeftUnit = ($clinit_Style$Unit() , PX);
  this.targetTopUnit = PX;
  this.targetRightUnit = PX;
  this.targetBottomUnit = PX;
  this.container = container;
  this.child = child;
}

defineClass(74, 1, {74:1}, Layout$Layer);
_.bottom = 0;
_.height = 0;
_.left = 0;
_.right = 0;
_.setBottom = false;
_.setHeight = false;
_.setLeft = false;
_.setRight = false;
_.setTargetBottom = true;
_.setTargetHeight = false;
_.setTargetLeft = true;
_.setTargetRight = true;
_.setTargetTop = true;
_.setTargetWidth = false;
_.setTop = false;
_.setWidth = false;
_.sourceBottom = 0;
_.sourceHeight = 0;
_.sourceLeft = 0;
_.sourceRight = 0;
_.sourceTop = 0;
_.sourceWidth = 0;
_.targetBottom = 0;
_.targetHeight = 0;
_.targetLeft = 0;
_.targetRight = 0;
_.targetTop = 0;
_.targetWidth = 0;
_.top_0 = 0;
_.visible = true;
_.width_0 = 0;
var Lcom_google_gwt_layout_client_Layout$Layer_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/Layer', 74);
function $clinit_LayoutImpl(){
  $clinit_LayoutImpl = emptyMethod;
  fixedRuler = createRuler(($clinit_Style$Unit() , CM), CM);
  $appendChild($doc.body, fixedRuler);
}

function $attachChild_0(parent_0, child){
  var container;
  container = $doc.createElement('div');
  container.appendChild(child);
  $setPropertyImpl(container.style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(container.style, 'overflow', ($clinit_Style$Overflow() , 'hidden'));
  $fillParent(child);
  parent_0.insertBefore(container, null);
  return container;
}

function $fillParent(elem){
  var style;
  style = elem.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
  $setPropertyImpl(style, 'top', '0.0px');
  $setPropertyImpl(style, 'right', '0.0px');
  $setPropertyImpl(style, 'bottom', '0.0px');
}

function $getUnitSizeInPixels(this$static, parent_0, unit, vertical){
  if (!unit) {
    return 1;
  }
  switch (unit.ordinal) {
    case 1:
      return (vertical?parent_0.clientHeight | 0:parent_0.clientWidth | 0) / 100;
    case 2:
      return ($getSubPixelOffsetWidth(this$static.relativeRuler) | 0) / 10;
    case 3:
      return ((this$static.relativeRuler.offsetHeight || 0) | 0) / 10;
    case 7:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.1;
    case 8:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.01;
    case 6:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.254;
    case 4:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.00353;
    case 5:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.0423;
    default:case 0:
      return 1;
  }
}

function $initParent(this$static, parent_0){
  $setPropertyImpl(parent_0.style, 'position', ($clinit_Style$Position() , 'relative'));
  $appendChild(parent_0, this$static.relativeRuler = createRuler(($clinit_Style$Unit() , EM), EX));
}

function $layout_0(layer){
  var style;
  style = layer.container.style;
  layer.visible?$setPropertyImpl(style, 'display', ''):$setPropertyImpl(style, 'display', ($clinit_Style$Display() , 'none'));
  style['left'] = layer.setLeft?layer.left + 'px':'';
  style['top'] = layer.setTop?layer.top_0 + 'px':'';
  style['right'] = layer.setRight?layer.right + 'px':'';
  style['bottom'] = layer.setBottom?layer.bottom + 'px':'';
  style['width'] = layer.setWidth?layer.width_0 + null.nullMethod():'';
  style['height'] = layer.setHeight?layer.height + null.nullMethod():'';
  style = layer.child.style;
  switch (2) {
    case 2:
      $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'right', '0.0px');
  }
  switch (2) {
    case 2:
      $setPropertyImpl(style, 'top', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'bottom', '0.0px');
  }
}

function $removeChild_1(container, child){
  var style;
  $removeFromParent(container);
  $getParentElement(child) == container && $removeFromParent(child);
  style = child.style;
  $setPropertyImpl(style, 'position', '');
  $setPropertyImpl(style, 'left', '');
  $setPropertyImpl(style, 'top', '');
  $setPropertyImpl(style, 'width', '');
  $setPropertyImpl(style, 'height', '');
}

function LayoutImpl(){
  $clinit_LayoutImpl();
}

function createRuler(widthUnit, heightUnit){
  var ruler, style;
  ruler = $doc.createElement('div');
  $setInnerHTML(ruler, '&nbsp;');
  style = ruler.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'zIndex', '-32767');
  $setPropertyImpl(style, 'top', -20 + heightUnit.getType());
  $setPropertyImpl(style, 'width', 10 + widthUnit.getType());
  $setPropertyImpl(style, 'height', 10 + heightUnit.getType());
  $setPropertyImpl(style, 'visibility', ($clinit_Style$Visibility() , 'hidden'));
  $set(($clinit_State() , HIDDEN), ruler, initValues(getClassLiteralForArray(Ljava_lang_Boolean_2_classLit, 1), $intern_4, 50, 0, [($clinit_Boolean() , $clinit_Boolean() , TRUE)]));
  return ruler;
}

defineClass(406, 1, {}, LayoutImpl);
var fixedRuler;
var Lcom_google_gwt_layout_client_LayoutImpl_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImpl', 406);
function PlaceHistoryHandler$DefaultHistorian(){
}

defineClass(241, 1, {}, PlaceHistoryHandler$DefaultHistorian);
var Lcom_google_gwt_place_shared_PlaceHistoryHandler$DefaultHistorian_2_classLit = createForClass('com.google.gwt.place.shared', 'PlaceHistoryHandler/DefaultHistorian', 241);
function $get_Key$type$com$google$gwt$place$shared$PlaceHistoryHandler$Historian$_annotation$$none$$(){
  var created;
  created = new PlaceHistoryHandler$DefaultHistorian;
  return created;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment(){
}

defineClass(208, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment);
var Lcom_google_gwt_place_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.google.gwt.place.shared', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 208);
function $replace(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw new NullPointerException_0('html is null');
  }
  this.html = html;
}

defineClass(49, 1, {86:1, 3:1}, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.asString = function asString(){
  return this.html;
}
;
_.equals$ = function equals_1(obj){
  if (!instanceOf(obj, 86)) {
    return false;
  }
  return $equals_0(this.html, dynamicCast(obj, 86).asString());
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode_0(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 49);
function SafeHtmlString(){
  this.html = '';
}

defineClass(372, 1, {86:1, 3:1}, SafeHtmlString);
_.asString = function asString_0(){
  return this.html;
}
;
_.equals$ = function equals_2(obj){
  if (!instanceOf(obj, 86)) {
    return false;
  }
  return $equals_0(this.html, dynamicCast(obj, 86).asString());
}
;
_.hashCode$ = function hashCode_4(){
  return getHashCode_0(this.html);
}
;
_.toString$ = function toString_6(){
  return 'safe: "' + this.html + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 372);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  new SafeHtmlString;
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  s.indexOf('&') != -1 && (s = $replace(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, GT_RE, LT_RE, QUOT_RE, SQUOT_RE;
defineClass(462, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 462);
function PassthroughParser(){
}

defineClass(381, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 381);
function PassthroughRenderer(){
}

defineClass(380, 462, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 380);
function $get_0(this$static){
  if (!this$static.element) {
    this$static.element = $getElementById($doc, this$static.domId);
    if (!this$static.element) {
      throw new RuntimeException_0('Cannot find element with id "' + this$static.domId + '". Perhaps it is not attached to the document body.');
    }
    this$static.element.removeAttribute('id');
  }
  return this$static.element;
}

function LazyDomElement(domId){
  this.domId = domId;
}

defineClass(31, 1, {}, LazyDomElement);
var Lcom_google_gwt_uibinder_client_LazyDomElement_2_classLit = createForClass('com.google.gwt.uibinder.client', 'LazyDomElement', 31);
function attachToDom(element){
  var origParent, origSibling;
  ensureHiddenDiv();
  origParent = $getParentElement(element);
  origSibling = $getNextSiblingElement(element);
  $appendChild(hiddenDiv, element);
  return new UiBinderUtil$TempAttachment(origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (!hiddenDiv) {
    hiddenDiv = $doc.createElement('div');
    setVisible(hiddenDiv, false);
    $appendChild(getBodyElement(), hiddenDiv);
  }
}

function orphan(node){
  $removeChild(node.parentNode, node);
}

var hiddenDiv;
function UiBinderUtil$TempAttachment(origParent, origSibling, element){
  this.origParent = origParent;
  this.origSibling = origSibling;
  this.element = element;
}

defineClass(363, 1, {}, UiBinderUtil$TempAttachment);
var Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client', 'UiBinderUtil/TempAttachment', 363);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_0(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function $clinit_History(){
  $clinit_History = emptyMethod;
  new History$HistoryImpl;
  historyEventSource = new History$HistoryEventSource;
  token_0 = getDecodedHash();
}

function getDecodedHash(){
  var hashToken;
  hashToken = $wnd.location.hash;
  if (hashToken == null || !hashToken.length) {
    return '';
  }
  return $decodeHistoryToken(__substr(hashToken, 1, hashToken.length - 1));
}

function newItem(historyToken){
  $clinit_History();
  var updateToken;
  historyToken = historyToken == null?'':historyToken;
  if (!$equals_0(historyToken, token_0)) {
    token_0 = historyToken;
    updateToken = $wnd.encodeURI(historyToken).replace('#', '%23');
    $wnd.location.hash = updateToken;
  }
}

function onHashChanged(){
  $clinit_History();
  var hashToken;
  hashToken = getDecodedHash();
  if (!$equals_0(hashToken, token_0)) {
    token_0 = hashToken;
    fire_3(historyEventSource, hashToken);
  }
}

var historyEventSource, token_0;
function $addValueChangeHandler(this$static, handler){
  return $addHandler(this$static.handlers, (!TYPE_4 && (TYPE_4 = new GwtEvent$Type) , TYPE_4), handler);
}

function History$HistoryEventSource(){
  this.handlers = new HandlerManager(null);
}

defineClass(253, 1, $intern_11, History$HistoryEventSource);
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryEventSource', 253);
function $decodeHistoryToken(historyToken){
  return $wnd.decodeURI(historyToken.replace('%23', '#'));
}

function History$HistoryImpl(){
  var handler;
  handler = $entry(onHashChanged);
  $wnd.addEventListener('hashchange', handler, false);
}

defineClass(254, 1, {}, History$HistoryImpl);
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImpl', 254);
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler_0(TYPE_2?TYPE_2:(TYPE_2 = new GwtEvent$Type), handler);
}

function addHandler_0(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler_0((!TYPE_3 && (TYPE_3 = new GwtEvent$Type) , TYPE_3), handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return event_0.message_0;
  }
  return null;
}

function onResize(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_2((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
    }
  }
}

var closeHandlersInitialized = false, handlers_0, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_5 = new GwtEvent$Type;
}

function $setMessage(this$static, message){
  this$static.message_0 = message;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(231, 450, {}, Window$ClosingEvent);
_.dispatch = function dispatch_5(handler){
  $setMessage(this, dynamicCast(handler, 427).onLeaveQuestion);
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_5;
}
;
_.message_0 = null;
var TYPE_5;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 231);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(92, 67, $intern_11, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 92);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_15;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_16;
    case 'gesturechange':
      return $intern_17;
    case 'gestureend':
      return $intern_18;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 24)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkBitlessEvent(elem, eventTypeName){
  var dispatchMap, dispatcher;
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & 65536 && (elem.onerror = bits & 65536?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_15 && (elem.onpaste = bits & $intern_15?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & 4194304 && (elem.ontouchend = bits & 4194304?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_16 && (elem.ongesturestart = bits & $intern_16?dispatchEvent_1:null);
  chMask & $intern_17 && (elem.ongesturechange = bits & $intern_17?dispatchEvent_1:null);
  chMask & $intern_18 && (elem.ongestureend = bits & $intern_18?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOM();
  return;
}

function dispatchDragEvent(evt){
  evt.preventDefault();
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = $eventGetCurrentTarget(evt);
  $setPropertyString(element, '__gwtLastUnhandledEvent', evt.type);
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = $eventGetCurrentTarget(evt);
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire_1((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function IncompatibleRemoteServiceException(){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser.');
}

function IncompatibleRemoteServiceException_0(msg){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser. ( ' + msg + ' )');
}

function IncompatibleRemoteServiceException_1(cause){
  RuntimeException_1.call(this, 'The response could not be deserialized', cause);
}

defineClass(83, 7, $intern_3, IncompatibleRemoteServiceException, IncompatibleRemoteServiceException_0, IncompatibleRemoteServiceException_1);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'IncompatibleRemoteServiceException', 83);
function deserialize(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate(streamReader){
  return new IncompatibleRemoteServiceException;
}

function serialize(streamWriter, instance){
  $writeString(streamWriter, instance.detailMessage);
}

function InvocationException(s){
  RuntimeException_1.call(this, s, null);
}

function InvocationException_0(s, cause){
  RuntimeException_1.call(this, s, cause);
}

defineClass(70, 7, $intern_3, InvocationException, InvocationException_0);
var Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'InvocationException', 70);
function $create(this$static, serviceEntryPoint){
  this$static.builder = new RequestBuilder(($clinit_RequestBuilder() , POST), serviceEntryPoint);
  return this$static;
}

function $doFinish(rb){
  $setHeader(rb, 'X-GWT-Permutation', $strongName);
  $setHeader(rb, 'X-GWT-Module-Base', getModuleBaseURL());
}

function $doSetCallback(rb, callback){
  throwIfNull('callback', callback);
  rb.callback = callback;
}

function $doSetRequestData(rb, data_0){
  rb.requestData = data_0;
}

function $finish(this$static){
  try {
    $doFinish(this$static.builder);
    return this$static.builder;
  }
   finally {
    this$static.builder = null;
  }
}

function $setCallback_0(this$static, callback){
  $doSetCallback(this$static.builder, callback);
  return this$static;
}

function $setContentType(this$static){
  $setHeader(this$static.builder, 'Content-Type', 'text/x-gwt-rpc; charset=utf-8');
  return this$static;
}

function $setRequestData(this$static, data_0){
  $doSetRequestData(this$static.builder, data_0);
  return this$static;
}

function RpcRequestBuilder(){
}

defineClass(411, 1, {}, RpcRequestBuilder);
var Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcRequestBuilder', 411);
function RpcTokenException(){
  RuntimeException_0.call(this, 'Invalid RPC token');
}

defineClass(340, 7, $intern_3, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcTokenException', 340);
function deserialize_0(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_0(streamReader){
  return new RpcTokenException;
}

function SerializationException(msg){
  Exception_0.call(this, msg);
}

defineClass(73, 10, {73:1, 3:1, 10:1, 8:1}, SerializationException);
var Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'SerializationException', 73);
function ServiceDefTarget$NoServiceEntryPointSpecifiedException(){
  InvocationException.call(this, 'Service implementation URL not specified');
}

defineClass(329, 70, $intern_3, ServiceDefTarget$NoServiceEntryPointSpecifiedException);
var Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'ServiceDefTarget/NoServiceEntryPointSpecifiedException', 329);
function StatusCodeException(statusCode, statusText, encodedResponse){
  InvocationException.call(this, statusCode + ' ' + statusText + ' ' + encodedResponse);
}

defineClass(418, 70, $intern_3, StatusCodeException);
var Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'StatusCodeException', 418);
function serialize_0(streamWriter, instance){
  $writeString(streamWriter, instance.nullField);
}

function deserialize_1(streamReader, instance){
}

function instantiate_1(streamReader){
  return $getString(streamReader, $readInt(streamReader));
}

function serialize_1(streamWriter, instance){
  $writeInt(streamWriter, $addString(streamWriter, instance));
}

function setDetailMessage(instance, value_0){
  instance.detailMessage = value_0;
}

function deserialize_2(streamReader, instance){
}

function instantiate_2(streamReader){
  return null;
}

function serialize_2(streamWriter, instance){
}

function deserialize_3(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function serialize_3(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function instantiate_3(streamReader){
  return new ArrayList;
}

function deserialize_4(streamReader, instance){
  var i, obj, size_0;
  size_0 = $readInt(streamReader);
  for (i = 0; i < size_0; ++i) {
    obj = $readObject(streamReader);
    setCheck(instance.array, instance.array.length, obj);
  }
}

function serialize_4(streamWriter, instance){
  var obj, obj$iterator, size_0;
  size_0 = instance.array.length;
  append(streamWriter.encodeBuffer, '' + size_0);
  for (obj$iterator = new AbstractList$IteratorImpl(instance); obj$iterator.i < obj$iterator.this$01_0.size_1();) {
    obj = (checkCriticalElement(obj$iterator.i < obj$iterator.this$01_0.size_1()) , obj$iterator.this$01_0.get_0(obj$iterator.last = obj$iterator.i++));
    $writeObject(streamWriter, obj);
  }
}

function $setFlags(this$static, flags){
  this$static.flags = flags;
}

function $setVersion(this$static, version){
  this$static.version = version;
}

defineClass(149, 1, {});
_.flags = 0;
_.version = 7;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStream', 149);
function $readObject(this$static){
  var token, typeSignature, id_0, instance;
  token = $readInt(this$static);
  if (token < 0) {
    return $get_1(this$static.seenArray, -(token + 1));
  }
  typeSignature = $getString(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return id_0 = ($add_3(this$static.seenArray, null) , this$static.seenArray.array.length) , instance = $instantiate(this$static.serializer, this$static, typeSignature) , $set_0(this$static.seenArray, id_0 - 1, instance) , $deserialize(this$static.serializer, this$static, instance, typeSignature) , instance;
}

defineClass(419, 149, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamReader', 419);
function $addString(this$static, string){
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = dynamicCast(this$static.stringMap.get_3(string), 40);
  if (o) {
    return o.value_0;
  }
  $add_3(this$static.stringTable, string);
  index_0 = this$static.stringTable.array.length;
  this$static.stringMap.put(string, valueOf(index_0));
  return index_0;
}

function $writeInt(this$static, fieldValue){
  append(this$static.encodeBuffer, '' + fieldValue);
}

function $writeObject(this$static, instance){
  var objIndex, typeSignature;
  if (instance == null) {
    $writeInt(this$static, $addString(this$static, null));
    return;
  }
  objIndex = $containsKey(this$static.objectMap, instance)?dynamicCast($get_2(this$static.objectMap, instance), 40).value_0:-1;
  if (objIndex >= 0) {
    append(this$static.encodeBuffer, '' + -(objIndex + 1));
    return;
  }
  $put(this$static.objectMap, instance, valueOf(this$static.objectCount++));
  typeSignature = $getObjectTypeSignature(this$static, instance);
  if (typeSignature == null) {
    throw new SerializationException('could not get type signature for ' + getClass__Ljava_lang_Class___devirtual$(instance));
  }
  $writeInt(this$static, $addString(this$static, typeSignature));
  $serialize(this$static.serializer, this$static, instance, typeSignature);
}

function $writeString(this$static, value_0){
  $writeInt(this$static, $addString(this$static, value_0));
}

defineClass(408, 149, {});
_.objectCount = 0;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamWriter', 408);
function $getString(this$static, index_0){
  return index_0 > 0?this$static.stringTable[index_0 - 1]:null;
}

function $prepareToRead(this$static, encoded){
  this$static.results = eval(encoded);
  this$static.index_0 = this$static.results.length;
  this$static.seenArray.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
  $setVersion(this$static, $readInt(this$static));
  $setFlags(this$static, $readInt(this$static));
  if (this$static.version != 7) {
    throw new IncompatibleRemoteServiceException_0('Expecting version 7 from server, got ' + this$static.version + '.');
  }
  if (((this$static.flags | 3) ^ 3) != 0) {
    throw new IncompatibleRemoteServiceException_0('Got an unknown flag from server: ' + this$static.flags);
  }
  this$static.stringTable = this$static.results[--this$static.index_0];
}

function $readInt(this$static){
  return this$static.results[--this$static.index_0];
}

function ClientSerializationStreamReader(serializer){
  this.seenArray = new ArrayList;
  this.serializer = serializer;
}

defineClass(420, 419, {}, ClientSerializationStreamReader);
_.index_0 = 0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamReader', 420);
function $clinit_ClientSerializationStreamWriter(){
  $clinit_ClientSerializationStreamWriter = emptyMethod;
  regex_0 = getQuotingRegex();
}

function $append(this$static, token){
  append(this$static.encodeBuffer, token);
}

function $getObjectTypeSignature(this$static, o){
  var clazz, e, clazz_0, superclass;
  clazz = getClass__Ljava_lang_Class___devirtual$(o);
  if (instanceOf(o, 4)) {
    e = dynamicCast(o, 4);
    clazz = (clazz_0 = e.___clazz$ , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass);
  }
  return $getSerializationSignature(this$static.serializer, clazz);
}

function $toString(this$static){
  var buffer;
  buffer = new StringBuilder;
  append(buffer, '' + this$static.version);
  append(buffer, '' + this$static.flags);
  $writeStringTable(this$static, buffer);
  $append_0(buffer, this$static.encodeBuffer.string);
  return buffer.string;
}

function $writeStringTable(this$static, buffer){
  var s, s$iterator, stringTable;
  stringTable = this$static.stringTable;
  append(buffer, '' + stringTable.array.length);
  for (s$iterator = new AbstractList$IteratorImpl(stringTable); s$iterator.i < s$iterator.this$01_0.size_1();) {
    s = (checkCriticalElement(s$iterator.i < s$iterator.this$01_0.size_1()) , dynamicCastToString(s$iterator.this$01_0.get_0(s$iterator.last = s$iterator.i++)));
    append(buffer, quoteString(s));
  }
  return buffer;
}

function ClientSerializationStreamWriter(serializer, moduleBaseURL, serializationPolicyStrongName){
  $clinit_ClientSerializationStreamWriter();
  this.objectMap = new IdentityHashMap;
  this.stringMap = new HashMap;
  this.stringTable = new ArrayList;
  this.serializer = serializer;
  this.moduleBaseURL = moduleBaseURL;
  this.serializationPolicyStrongName = serializationPolicyStrongName;
}

function append(sb, token){
  $clinit_ClientSerializationStreamWriter();
  sb.string += token;
  sb.string += '|';
}

function getQuotingRegex(){
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') != -1) {
    return /[\u0000\|\\\u0080-\uFFFF]/g;
  }
   else if (ua.indexOf('chrome/11') != -1) {
    return /[\u0000\|\\\u0300-\uFFFF]/g;
  }
   else if (ua.indexOf('webkit') != -1) {
    return /[\u0000\|\\\u0300-\u03ff\u0590-\u05FF\u0600-\u06ff\u0730-\u074A\u07eb-\u07f3\u0940-\u0963\u0980-\u09ff\u0a00-\u0a7f\u0b00-\u0b7f\u0e00-\u0e7f\u0f00-\u0fff\u1900-\u194f\u1a00-\u1a1f\u1b00-\u1b7f\u1cda-\u1cdc\u1dc0-\u1dff\u1f00-\u1fff\u2000-\u206f\u20d0-\u20ff\u2100-\u214f\u2300-\u23ff\u2a00-\u2aff\u3000-\u303f\uaab2-\uaab4\uD800-\uFFFF]/g;
  }
   else {
    return /[\u0000\|\\\uD800-\uFFFF]/g;
  }
}

function quoteString(str){
  var regex = regex_0;
  var idx = 0;
  var out = '';
  var result;
  while ((result = regex.exec(str)) != null) {
    out += str.substring(idx, result.index);
    idx = result.index + 1;
    var ch_0 = result[0].charCodeAt(0);
    if (ch_0 == 0) {
      out += '\\0';
    }
     else if (ch_0 == 92) {
      out += '\\\\';
    }
     else if (ch_0 == 124) {
      out += '\\!';
    }
     else {
      var hex = ch_0.toString(16);
      out += '\\u0000'.substring(0, 6 - hex.length) + hex;
    }
  }
  return out + str.substring(idx);
}

defineClass(409, 408, {}, ClientSerializationStreamWriter);
_.toString$ = function toString_7(){
  return $toString(this);
}
;
var regex_0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamWriter', 409);
function FailedRequest(){
  $$init(this);
  this.callback = null;
  this.timeoutMillis = 0;
  this.xmlHttpRequest = null;
}

defineClass(405, 145, {}, FailedRequest);
var Lcom_google_gwt_user_client_rpc_impl_FailedRequest_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'FailedRequest', 405);
function $createStreamReader(this$static, encoded){
  var clientSerializationStreamReader;
  clientSerializationStreamReader = new ClientSerializationStreamReader(this$static.serializer);
  $prepareToRead(clientSerializationStreamReader, getEncodedInstance(encoded));
  return clientSerializationStreamReader;
}

function $doInvoke(this$static, methodName, statsContext, requestData, callback){
  var ex, iex, rb;
  rb = $doPrepareRequestBuilderImpl(this$static, methodName, statsContext, requestData, callback);
  try {
    return throwIfNull('callback', rb.callback) , $doSend(rb, rb.requestData, rb.callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 46)) {
      ex = $e0;
      iex = new InvocationException_0('Unable to initiate the asynchronous service invocation (' + methodName + ') -- check the network connection', ex);
      $onExecuteFailure(callback.this$01, iex);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    $isStatsAvailable_0() && $stats_0($bytesStat(statsContext, methodName, requestData.length, 'requestSent'));
  }
  return null;
}

function $doPrepareRequestBuilderImpl(this$static, methodName, statsContext, requestData, callback){
  var responseHandler;
  if (this$static.remoteServiceURL == null) {
    throw new ServiceDefTarget$NoServiceEntryPointSpecifiedException;
  }
  responseHandler = new RequestCallbackAdapter(this$static, methodName, statsContext, callback);
  !this$static.rpcRequestBuilder && (this$static.rpcRequestBuilder = new RpcRequestBuilder);
  $create(this$static.rpcRequestBuilder, this$static.remoteServiceURL);
  $setCallback_0(this$static.rpcRequestBuilder, responseHandler);
  $setContentType(this$static.rpcRequestBuilder);
  $setRequestData(this$static.rpcRequestBuilder, requestData);
  return $finish(this$static.rpcRequestBuilder);
}

function $setServiceEntryPoint(this$static, url_0){
  this$static.remoteServiceURL = url_0;
}

function RemoteServiceProxy(moduleBaseURL, serializer){
  this.moduleBaseURL = moduleBaseURL;
  this.serializer = serializer;
  this.serializationPolicyName = '7A5477C61DBAD44478CC21E3E5BE6EDE';
}

function getEncodedInstance(encodedResponse){
  if ($equals_0(encodedResponse.substr(0, 4), '//OK') || $equals_0(encodedResponse.substr(0, 4), '//EX')) {
    return __substr(encodedResponse, 4, encodedResponse.length - 4);
  }
  return encodedResponse;
}

defineClass(331, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy', 331);
function $finish_0(this$static, callback){
  var payload;
  payload = $toString(this$static.streamWriter);
  $isStatsAvailable_0() && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'requestSerialized'));
  return $doInvoke(this$static.this$01, this$static.fullServiceName, this$static.statsContext, payload, callback);
}

function RemoteServiceProxy$ServiceHelper(this$0){
  this.this$01 = this$0;
  this.fullServiceName = 'DispatchService_Proxy.execute';
  this.methodName = 'execute';
  this.statsContext = new RpcStatsContext;
}

defineClass(333, 1, {}, RemoteServiceProxy$ServiceHelper);
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy/ServiceHelper', 333);
function $onError(this$static, exception){
  $onFailure_0(this$static.callback, exception);
}

function $onResponseReceived(this$static, response){
  var caught, e, encodedResponse, result, statusCode;
  result = null;
  caught = null;
  try {
    encodedResponse = response.xmlHttpRequest.responseText;
    statusCode = response.xmlHttpRequest.status;
    $isStatsAvailable_0() && $stats_0($bytesStat(this$static.statsContext, this$static.methodName, encodedResponse.length, 'responseReceived'));
    statusCode != 200?(caught = new StatusCodeException(statusCode, response.xmlHttpRequest.statusText, encodedResponse)):encodedResponse == null?(caught = new InvocationException('No response payload from ' + this$static.methodName)):$equals_0(encodedResponse.substr(0, 4), '//OK')?(result = $readObject($createStreamReader(this$static.streamFactory, encodedResponse))):$equals_0(encodedResponse.substr(0, 4), '//EX')?(caught = dynamicCast($readObject($createStreamReader(this$static.streamFactory, encodedResponse)), 8)):(caught = new InvocationException(encodedResponse + ' from ' + this$static.methodName));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 73)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_1(e);
    }
     else if (instanceOf($e0, 8)) {
      e = $e0;
      caught = e;
    }
     else 
      throw unwrap($e0);
  }
   finally {
    $isStatsAvailable_0() && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'responseDeserialized'));
  }
  try {
    !caught?$onSuccess_1(this$static.callback, dynamicCast(result, 54)):$onFailure_0(this$static.callback, caught);
  }
   finally {
    $isStatsAvailable_0() && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'end'));
  }
}

function RequestCallbackAdapter(streamFactory, methodName, statsContext, callback){
  this.streamFactory = streamFactory;
  this.callback = callback;
  this.methodName = methodName;
  this.statsContext = statsContext;
}

defineClass(393, 1, {}, RequestCallbackAdapter);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter', 393);
function $clinit_RequestCallbackAdapter$ResponseReader(){
  $clinit_RequestCallbackAdapter$ResponseReader = emptyMethod;
  BOOLEAN = new RequestCallbackAdapter$ResponseReader$1;
  BYTE = new RequestCallbackAdapter$ResponseReader$2;
  CHAR = new RequestCallbackAdapter$ResponseReader$3;
  DOUBLE = new RequestCallbackAdapter$ResponseReader$4;
  FLOAT = new RequestCallbackAdapter$ResponseReader$5;
  INT = new RequestCallbackAdapter$ResponseReader$6;
  LONG = new RequestCallbackAdapter$ResponseReader$7;
  OBJECT = new RequestCallbackAdapter$ResponseReader$8;
  SHORT = new RequestCallbackAdapter$ResponseReader$9;
  STRING = new RequestCallbackAdapter$ResponseReader$10;
  VOID = new RequestCallbackAdapter$ResponseReader$11;
}

function RequestCallbackAdapter$ResponseReader(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_RequestCallbackAdapter$ResponseReader();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, 1), $intern_4, 16, 0, [BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID]);
}

defineClass(16, 4, $intern_19);
var BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader', 16, Ljava_lang_Enum_2_classLit, values_7);
function RequestCallbackAdapter$ResponseReader$1(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BOOLEAN', 0);
}

defineClass(394, 16, $intern_19, RequestCallbackAdapter$ResponseReader$1);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/1', 394, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$10(){
  RequestCallbackAdapter$ResponseReader.call(this, 'STRING', 9);
}

defineClass(403, 16, $intern_19, RequestCallbackAdapter$ResponseReader$10);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/10', 403, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$11(){
  RequestCallbackAdapter$ResponseReader.call(this, 'VOID', 10);
}

defineClass(404, 16, $intern_19, RequestCallbackAdapter$ResponseReader$11);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/11', 404, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$2(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BYTE', 1);
}

defineClass(395, 16, $intern_19, RequestCallbackAdapter$ResponseReader$2);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/2', 395, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$3(){
  RequestCallbackAdapter$ResponseReader.call(this, 'CHAR', 2);
}

defineClass(396, 16, $intern_19, RequestCallbackAdapter$ResponseReader$3);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/3', 396, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$4(){
  RequestCallbackAdapter$ResponseReader.call(this, 'DOUBLE', 3);
}

defineClass(397, 16, $intern_19, RequestCallbackAdapter$ResponseReader$4);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/4', 397, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$5(){
  RequestCallbackAdapter$ResponseReader.call(this, 'FLOAT', 4);
}

defineClass(398, 16, $intern_19, RequestCallbackAdapter$ResponseReader$5);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/5', 398, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$6(){
  RequestCallbackAdapter$ResponseReader.call(this, 'INT', 5);
}

defineClass(399, 16, $intern_19, RequestCallbackAdapter$ResponseReader$6);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/6', 399, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$7(){
  RequestCallbackAdapter$ResponseReader.call(this, 'LONG', 6);
}

defineClass(400, 16, $intern_19, RequestCallbackAdapter$ResponseReader$7);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/7', 400, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$8(){
  RequestCallbackAdapter$ResponseReader.call(this, 'OBJECT', 7);
}

defineClass(401, 16, $intern_19, RequestCallbackAdapter$ResponseReader$8);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/8', 401, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$9(){
  RequestCallbackAdapter$ResponseReader.call(this, 'SHORT', 8);
}

defineClass(402, 16, $intern_19, RequestCallbackAdapter$ResponseReader$9);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/9', 402, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function $bytesStat(this$static, method, bytes, eventType){
  var stat = this$static.timeStat(method, eventType);
  stat.bytes = bytes;
  return stat;
}

function $isStatsAvailable_0(){
  return !!$stats;
}

function $stats_0(data_0){
  return $stats(data_0);
}

function $timeStat(this$static, method, eventType){
  return {moduleName:$moduleName, sessionId:$sessionId, subSystem:'rpc', evtGroup:this$static.requestId, method:method, millis:(new Date).getTime(), type:eventType};
}

function RpcStatsContext(){
  RpcStatsContext_0.call(this, requestIdCounter++);
}

function RpcStatsContext_0(requestId){
  this.requestId = requestId;
}

defineClass(148, 1, {}, RpcStatsContext);
_.timeStat = function timeStat(method, eventType){
  return $timeStat(this, method, eventType);
}
;
_.requestId = 0;
var requestIdCounter = 0;
var Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RpcStatsContext', 148);
function $check(this$static, typeSignature){
  if (!this$static.methodMapNative[typeSignature]) {
    throw new SerializationException(typeSignature);
  }
}

function $deserialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $deserialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function $getSerializationSignature(this$static, clazz){
  return this$static.signatureMapNative[getHashCode(clazz)];
}

function $instantiate(this$static, stream, typeSignature){
  $check(this$static, typeSignature);
  return $instantiate_0(this$static.methodMapNative, stream, typeSignature);
}

function $serialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $serialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function SerializerBase(methodMapNative, signatureMapNative){
  new HashMap;
  this.methodMapNative = methodMapNative;
  this.signatureMapNative = signatureMapNative;
}

defineClass(338, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'SerializerBase', 338);
function $deserialize_0(this$static, stream, instance, signature){
  this$static[signature][1](stream, instance);
}

function $instantiate_0(this$static, stream, signature){
  return this$static[signature][0](stream);
}

function $serialize_0(this$static, stream, instance, signature){
  this$static[signature][2](stream, instance);
}

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setStyleName(this$static){
  $setClassName(($clinit_DOM() , this$static.element), 'error');
}

function $setStyleName_0(this$static, style, add_0){
  setStyleName(($clinit_DOM() , this$static.element), style, add_0);
}

function $sinkBitlessEvent_0(this$static, eventTypeName){
  $clinit_DOM();
  $sinkBitlessEvent(this$static.element, eventTypeName);
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

defineClass(21, 1, {23:1, 21:1});
_.toString$ = function toString_8(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 21);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent_0(this$static, type_0.name_0):this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this$static.element, typeInt | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler_0(this$static, handler, type_0){
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
  fire_0(this$static);
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    fire_0(this$static);
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      $clinit_DOM();
      setEventListener(this$static.element, null);
      this$static.attached = false;
    }
  }
}

function $removeFromParent_0(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    this$static.parent_0.remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

defineClass(18, 21, $intern_20);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad_0(){
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 18);
function $clear_0(this$static){
  var it;
  it = new WidgetCollection$WidgetIterator(this$static.children);
  while (it.index_0 < it.this$01.size_0) {
    $next(it);
    $remove_5(it);
  }
}

defineClass(459, 18, $intern_20);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 459);
function $add_1(this$static, child, container){
  $removeFromParent_0(child);
  $add_6(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove_0(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild($getParentElement(elem), elem);
    $remove_4(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection(this);
}

defineClass(100, 459, $intern_20);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove_0(w){
  return $remove_0(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 100);
function $add_2(this$static, w){
  $add_1(this$static, w, ($clinit_DOM() , this$static.element));
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(367, 100, $intern_20);
_.remove = function remove_1(w){
  var removed;
  removed = $remove_0(this, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 367);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), 18);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 8)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_7(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(335, 132, $intern_12, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 335);
function AttachDetachException$1(){
}

defineClass(336, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_4(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 336);
function AttachDetachException$2(){
}

defineClass(337, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_5(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 337);
function FocusWidget(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(138, 18, $intern_20);
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = $getTabIndex(($clinit_DOM() , this.element));
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 138);
function $setHTML(this$static, html){
  $setInnerHTML(($clinit_DOM() , this$static.element), html);
}

function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(139, 138, $intern_20);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 139);
function Button(){
  ButtonBase.call(this, $createButtonElement($doc, 'button'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Button');
}

defineClass(81, 139, $intern_20, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 81);
function $addAll(this$static, c){
  var changed, e, e$iterator;
  checkNotNull(c);
  changed = false;
  for (e$iterator = $iterator(new AbstractMap$1(c.map_0)); e$iterator.val$outerIter2.hasNext();) {
    e = $next_0(e$iterator);
    changed = changed | $add_7(this$static, e);
  }
  return changed;
}

function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_2();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_0(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_0('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(444, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove_0 = function remove_2(o){
  return $advanceToFind(this, o, true);
}
;
_.toArray = function toArray(){
  return this.toArray_0(initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, this.size_1(), 3, 1));
}
;
_.toArray_0 = function toArray_0(a){
  var i, it, size_0;
  size_0 = this.size_1();
  a.length < size_0 && (a = createFrom(a, size_0));
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, it.next_0());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}
;
_.toString$ = function toString_9(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 444);
defineClass(446, 444, {17:1});
_.add_1 = function add_1(index_0, element){
  throw new UnsupportedOperationException('Add not supported on this list');
}
;
_.add_2 = function add_2(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_3(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 17)) {
    return false;
  }
  other = dynamicCast(o, 17);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_5(){
  return hashCode_18(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_1 = function remove_3(index_0){
  throw new UnsupportedOperationException('Remove not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 446);
function $$init_0(this$static){
  this$static.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
}

function $add_3(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $addAll_0(this$static, c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  $insertAt(this$static, this$static.array.length, cArray);
  return true;
}

function $get_1(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_18(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $insertAt(this$static, index_0, values){
  nativeArraySplice(values, 0, this$static.array, index_0, values.length, false);
}

function $remove_1(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_2(this$static, o){
  var i;
  i = $indexOf(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove_1(i);
  return true;
}

function $set_0(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  setCheck(this$static.array, index_0, o);
  return previous;
}

function $toArray(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = createFrom(out, size_0));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  $$init_0(this);
}

function ArrayList_0(c){
  $$init_0(this);
  $insertAt(this, 0, c.toArray());
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(9, 446, $intern_21, ArrayList, ArrayList_0);
_.add_1 = function add_3(index_0, o){
  checkPositionIndex(index_0, this.array.length);
  splice_0(this.array, index_0, 0, o);
}
;
_.add_2 = function add_4(o){
  return $add_3(this, o);
}
;
_.contains_0 = function contains_0(o){
  return $indexOf(this, o, 0) != -1;
}
;
_.get_0 = function get_0(index_0){
  return $get_1(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.remove_1 = function remove_4(index_0){
  return $remove_1(this, index_0);
}
;
_.remove_0 = function remove_5(o){
  return $remove_2(this, o);
}
;
_.size_1 = function size_1(){
  return this.array.length;
}
;
_.toArray = function toArray_1(){
  return cloneSubrange(this.array, this.array.length);
}
;
_.toArray_0 = function toArray_2(out){
  return $toArray(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 9);
function ChangeListenerCollection(){
  ArrayList.call(this);
}

defineClass(341, 9, $intern_21, ChangeListenerCollection);
var Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ChangeListenerCollection', 341);
function deserialize_5(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_4(streamReader){
  return new ChangeListenerCollection;
}

function serialize_5(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function ClickListenerCollection(){
  ArrayList.call(this);
}

defineClass(342, 9, $intern_21, ClickListenerCollection);
var Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ClickListenerCollection', 342);
function deserialize_6(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_5(streamReader){
  return new ClickListenerCollection;
}

function serialize_6(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function $setTextOrHtml(this$static, content_0){
  $setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(364, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 364);
function FocusListenerCollection(){
  ArrayList.call(this);
}

defineClass(343, 9, $intern_21, FocusListenerCollection);
var Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusListenerCollection', 343);
function deserialize_7(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_6(streamReader){
  return new FocusListenerCollection;
}

function serialize_7(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function FormHandlerCollection(){
  ArrayList.call(this);
}

defineClass(344, 9, $intern_21, FormHandlerCollection);
var Lcom_google_gwt_user_client_ui_FormHandlerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormHandlerCollection', 344);
function deserialize_8(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_7(streamReader){
  return new FormHandlerCollection;
}

function serialize_8(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function $addAndReplaceElement_0(this$static, widget, toReplace){
  var children, next, toRemove;
  if (toReplace == ($clinit_DOM() , widget.element)) {
    return;
  }
  $removeFromParent_0(widget);
  toRemove = null;
  children = new WidgetCollection$WidgetIterator(this$static.children);
  while (children.index_0 < children.this$01.size_0) {
    next = $next(children);
    if ($isOrHasChild(toReplace, next.element)) {
      if (next.element == toReplace) {
        toRemove = next;
        break;
      }
      $remove_5(children);
    }
  }
  $add_6(this$static.children, widget);
  if (!toRemove) {
    $replaceChild(toReplace.parentNode, widget.element, toReplace);
  }
   else {
    $insertBefore(toReplace.parentNode, widget.element, toReplace);
    $remove_0(this$static, toRemove);
  }
  $setParent(widget, this$static);
}

function HTMLPanel(html){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
  $setInnerHTML(($clinit_DOM() , this.element), html);
}

defineClass(62, 100, $intern_20, HTMLPanel);
var Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLPanel', 62);
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  $clinit_Style$TextAlign();
}

function KeyboardListenerCollection(){
  ArrayList.call(this);
}

defineClass(345, 9, $intern_21, KeyboardListenerCollection);
var Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'KeyboardListenerCollection', 345);
function deserialize_9(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_8(streamReader){
  return new KeyboardListenerCollection;
}

function serialize_9(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(143, 18, $intern_20);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 143);
function $setText(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0);
}

function Label(){
  LabelBase.call(this, $doc.createElement('div'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Label');
}

defineClass(144, 143, $intern_20, Label);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 144);
function $schedule_0(this$static){
  this$static.duration = 0;
  this$static.canceled = false;
  if (!this$static.scheduled) {
    this$static.scheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), this$static);
  }
}

function LayoutCommand(layout){
  this.layout = layout;
}

defineClass(391, 1, {}, LayoutCommand);
_.execute_1 = function execute_6(){
  this.scheduled = false;
  if (this.canceled) {
    return;
  }
  $layout(this.layout, this.duration);
}
;
_.canceled = false;
_.duration = 0;
_.scheduled = false;
var Lcom_google_gwt_user_client_ui_LayoutCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand', 391);
function $add_5(this$static, widget){
  $insert(this$static, widget, this$static.children.size_0);
}

function $insert(this$static, widget, beforeIndex){
  var layer;
  $removeFromParent_0(widget);
  $insert_0(this$static.children, widget, beforeIndex);
  layer = $attachChild(this$static.layout, ($clinit_DOM() , widget.element));
  widget.layoutData = layer;
  $setParent(widget, this$static);
  $schedule_0(this$static.layoutCmd);
}

function $onResize(this$static){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next(child$iterator);
    instanceOf(child, 154) && dynamicCast(child, 154).onResize();
  }
}

defineClass(374, 100, $intern_22);
_.onAttach = function onAttach_1(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_0(){
  $onDetach(this);
}
;
_.onResize = function onResize_0(){
  $onResize(this);
}
;
_.remove = function remove_6(w){
  var removed;
  removed = $remove_0(this, w);
  removed && $removeChild_0(this.layout, w.layoutData);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_LayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutPanel', 374);
function LoadListenerCollection(){
  ArrayList.call(this);
}

defineClass(346, 9, $intern_21, LoadListenerCollection);
var Lcom_google_gwt_user_client_ui_LoadListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LoadListenerCollection', 346);
function deserialize_10(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_9(streamReader){
  return new LoadListenerCollection;
}

function serialize_10(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function MouseListenerCollection(){
  ArrayList.call(this);
}

defineClass(347, 9, $intern_21, MouseListenerCollection);
var Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MouseListenerCollection', 347);
function deserialize_11(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_10(streamReader){
  return new MouseListenerCollection;
}

function serialize_11(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function MouseWheelListenerCollection(){
  ArrayList.call(this);
}

defineClass(348, 9, $intern_21, MouseWheelListenerCollection);
var Lcom_google_gwt_user_client_ui_MouseWheelListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MouseWheelListenerCollection', 348);
function deserialize_12(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_11(streamReader){
  return new MouseWheelListenerCollection;
}

function serialize_12(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function $getText(this$static){
  return $getPropertyString(($clinit_DOM() , this$static.element), 'value');
}

function $setText_0(this$static){
  $setPropertyString(($clinit_DOM() , this$static.element), 'value', '');
}

function ValueBoxBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(322, 138, $intern_20);
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  var type_0;
  type_0 = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_1(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 322);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

defineClass(323, 322, $intern_20);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 323);
function TextBox(){
  $clinit_TextBoxBase();
  TextBox_0.call(this, $createInputElement($doc, 'text'), 'gwt-TextBox');
}

function TextBox_0(element, styleName){
  ValueBoxBase.call(this, element, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser)));
  $setClassName(($clinit_DOM() , this.element), styleName);
}

defineClass(97, 323, $intern_20, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 97);
function PasswordTextBox(){
  $clinit_TextBoxBase();
  TextBox_0.call(this, $createInputElement($doc, 'password'), 'gwt-PasswordTextBox');
}

defineClass(328, 97, $intern_20, PasswordTextBox);
var Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PasswordTextBox', 328);
function PopupListenerCollection(){
  ArrayList.call(this);
}

defineClass(349, 9, $intern_21, PopupListenerCollection);
var Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupListenerCollection', 349);
function deserialize_13(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_12(streamReader){
  return new PopupListenerCollection;
}

function serialize_13(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function RootLayoutPanel(){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
  this.layout = new Layout(($clinit_DOM() , this.element));
  this.layoutCmd = new LayoutCommand(this.layout);
  addResizeHandler(new RootLayoutPanel$1(this));
}

function get_1(){
  if (!singleton) {
    singleton = new RootLayoutPanel;
    $add_2(($clinit_RootPanel() , get_2()), singleton);
  }
  return singleton;
}

defineClass(375, 374, $intern_22, RootLayoutPanel);
_.onLoad = function onLoad_2(){
  $fillParent(this.layout.parentElem);
}
;
var singleton;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel', 375);
function RootLayoutPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(376, 1, {474:1, 28:1}, RootLayoutPanel$1);
var Lcom_google_gwt_user_client_ui_RootLayoutPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel/1', 376);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_6(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    widgetsToDetach.map_0.clear_0();
    rootPanels.clear_0();
  }
}

function get_2(){
  $clinit_RootPanel();
  var rp;
  rp = dynamicCast(rootPanels.get_3(null), 84);
  if (rp) {
    return rp;
  }
  rootPanels.size_1() == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  rootPanels.put(null, rp);
  $add_7(widgetsToDetach, rp);
  return rp;
}

function getBodyElement(){
  $clinit_RootPanel();
  return $doc.body;
}

defineClass(84, 367, $intern_23);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 84);
function RootPanel$1(){
}

defineClass(369, 1, {}, RootPanel$1);
_.execute_2 = function execute_7(w){
  w.attached && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 369);
function RootPanel$2(){
}

defineClass(370, 1, {473:1, 28:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 370);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, getBodyElement());
}

defineClass(368, 84, $intern_23, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 368);
function ScrollListenerCollection(){
  ArrayList.call(this);
}

defineClass(350, 9, $intern_21, ScrollListenerCollection);
var Lcom_google_gwt_user_client_ui_ScrollListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollListenerCollection', 350);
function deserialize_14(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_13(streamReader){
  return new ScrollListenerCollection;
}

function serialize_14(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function TabListenerCollection(){
  ArrayList.call(this);
}

defineClass(351, 9, $intern_21, TabListenerCollection);
var Lcom_google_gwt_user_client_ui_TabListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabListenerCollection', 351);
function deserialize_15(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_14(streamReader){
  return new TabListenerCollection;
}

function serialize_15(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function TableListenerCollection(){
  ArrayList.call(this);
}

defineClass(352, 9, $intern_21, TableListenerCollection);
var Lcom_google_gwt_user_client_ui_TableListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TableListenerCollection', 352);
function deserialize_16(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_15(streamReader){
  return new TableListenerCollection;
}

function serialize_16(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function TreeListenerCollection(){
  ArrayList.call(this);
}

defineClass(353, 9, $intern_21, TreeListenerCollection);
var Lcom_google_gwt_user_client_ui_TreeListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TreeListenerCollection', 353);
function deserialize_17(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_16(streamReader){
  return new TreeListenerCollection;
}

function serialize_17(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_0 = new ValueBoxBase$TextAlignment$1;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2;
  LEFT_0 = new ValueBoxBase$TextAlignment$3;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_ValueBoxBase$TextAlignment();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_4, 38, 0, [CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(38, 4, $intern_24);
var CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 38, Ljava_lang_Enum_2_classLit, values_8);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(324, 38, $intern_24, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 324, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(325, 38, $intern_24, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 325, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(326, 38, $intern_24, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 326, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(327, 38, $intern_24, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 327, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function $add_6(this$static, w){
  $insert_0(this$static, w, this$static.size_0);
}

function $indexOf_0(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_0(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 18, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_3(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_4(this$static, w){
  var index_0;
  index_0 = $indexOf_0(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_3(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 18, 4, 0, 1);
}

defineClass(371, 1, {}, WidgetCollection);
_.iterator = function iterator_2(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 371);
function $next(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_5(this$static){
  if (!this$static.currentWidget) {
    throw new IllegalStateException;
  }
  this$static.this$01.parent_0.remove(this$static.currentWidget);
  --this$static.index_0;
  this$static.currentWidget = null;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(72, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove_2 = function remove_7(){
  $remove_5(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 72);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_0('safari', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(87, 8, $intern_1);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 87);
defineClass(27, 87, $intern_1);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 27);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 8)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 8):null);
}

defineClass(162, 27, $intern_1, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 162);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $removeHandler(this$static){
  this$static.this$01.doRemove(this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(233, 1, {422:1}, SimpleEventBus$1);
_.removeHandler = function removeHandler_0(){
  $removeHandler(this);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 233);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(234, 1, {428:1}, SimpleEventBus$2);
_.execute_1 = function execute_8(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 234);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(128, 1, {428:1}, SimpleEventBus$3);
_.execute_1 = function execute_9(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 128);
function $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$) {
    result = new SimpleEventBus;
    this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_0(){
}

defineClass(206, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_0);
_.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = null;
var Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.google.web.bindery.event.shared', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 206);
function $decodeQueryString(encodedUrlComponent){
  var regexp;
  return throwIfNull('encodedURLComponent', encodedUrlComponent) , regexp = /\+/g , decodeURIComponent(encodedUrlComponent.replace(regexp, '%20'));
}

function ClientUrlUtils(){
}

defineClass(249, 1, {}, ClientUrlUtils);
var Lcom_gwtplatform_common_client_ClientUrlUtils_2_classLit = createForClass('com.gwtplatform.common.client', 'ClientUrlUtils', 249);
function CodeSplitProvider(provider){
  this.provider = provider;
}

defineClass(247, 1, {425:1}, CodeSplitProvider);
_.get_2 = function get_3(callback){
  runAsync(1, new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment$1$1(this.provider, callback));
}
;
var Lcom_gwtplatform_common_client_CodeSplitProvider_2_classLit = createForClass('com.gwtplatform.common.client', 'CodeSplitProvider', 247);
function StandardProvider(provider){
  this.provider = provider;
}

defineClass(248, 1, {425:1}, StandardProvider);
_.get_2 = function get_4(callback){
  callback.onSuccess($get_Key$type$com$vypersw$finances$client$login$LoginPresenter$_annotation$$none$$(this.provider.this$01));
}
;
var Lcom_gwtplatform_common_client_StandardProvider_2_classLit = createForClass('com.gwtplatform.common.client', 'StandardProvider', 248);
function $get_Key$type$com$gwtplatform$common$client$ClientUrlUtils$_annotation$$none$$(){
  var created;
  created = new ClientUrlUtils;
  return created;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_1(){
}

defineClass(205, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_1);
var Lcom_gwtplatform_common_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.common.client', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 205);
function $get_Key$type$com$gwtplatform$common$shared$UrlUtils$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$common$shared$UrlUtils$_annotation$$none$$) {
    result = $get_Key$type$com$gwtplatform$common$client$ClientUrlUtils$_annotation$$none$$($getFragment_com_gwtplatform_common_client(this$static.injector));
    this$static.singleton_Key$type$com$gwtplatform$common$shared$UrlUtils$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$common$shared$UrlUtils$_annotation$$none$$;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_2(injector){
  this.injector = injector;
}

defineClass(212, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_2);
_.singleton_Key$type$com$gwtplatform$common$shared$UrlUtils$_annotation$$none$$ = null;
var Lcom_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.common.shared', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 212);
function DefaultExceptionHandler(){
}

defineClass(317, 1, {}, DefaultExceptionHandler);
var Lcom_gwtplatform_dispatch_client_DefaultExceptionHandler_2_classLit = createForClass('com.gwtplatform.dispatch.client', 'DefaultExceptionHandler', 317);
function DefaultSecurityCookieAccessor(){
}

defineClass(318, 1, {}, DefaultSecurityCookieAccessor);
var Lcom_gwtplatform_dispatch_client_DefaultSecurityCookieAccessor_2_classLit = createForClass('com.gwtplatform.dispatch.client', 'DefaultSecurityCookieAccessor', 318);
function $onSuccess_0(this$static){
  var exception;
  null.nullMethod()?!this$static.dispatchRequest.cancelled && $setDelegate(this$static.dispatchRequest, null.nullMethod()):(exception = new InterceptorMismatchException(this$static.action.___clazz$, null.nullMethod()) , this$static.dispatchRequest.cancelled = true , $onExecuteFailure(this$static.dispatchCall, exception) , undefined);
}

defineClass(383, 1, {});
_.onFailure_0 = function onFailure_0(caught){
  this.dispatchRequest.cancelled = true;
  $onExecuteFailure(this.dispatchCall, caught);
}
;
_.onSuccess = function onSuccess_0(interceptor){
  $onSuccess_0(this, throwClassCastExceptionUnlessNull(interceptor));
}
;
var Lcom_gwtplatform_dispatch_client_DelegatingAsyncCallback_2_classLit = createForClass('com.gwtplatform.dispatch.client', 'DelegatingAsyncCallback', 383);
function $setDelegate(this$static){
  if (this$static.cancelled)
  ;
  else {
    throw new NullPointerException_0('delegate');
  }
}

function DelegatingDispatchRequest(){
}

defineClass(382, 1, {}, DelegatingDispatchRequest);
_.cancelled = false;
var Lcom_gwtplatform_dispatch_client_DelegatingDispatchRequest_2_classLit = createForClass('com.gwtplatform.dispatch.client', 'DelegatingDispatchRequest', 382);
function $onExecuteFailure(this$static, caught){
  this$static.callback.onFailure_0(caught);
}

function $onExecuteSuccess(this$static, result){
  this$static.callback.onSuccess(result);
}

defineClass(377, 1, {});
var Lcom_gwtplatform_dispatch_client_DispatchCall_2_classLit = createForClass('com.gwtplatform.dispatch.client', 'DispatchCall', 377);
function GwtHttpDispatchRequest(){
}

defineClass(385, 1, {}, GwtHttpDispatchRequest);
var Lcom_gwtplatform_dispatch_client_GwtHttpDispatchRequest_2_classLit = createForClass('com.gwtplatform.dispatch.client', 'GwtHttpDispatchRequest', 385);
function DefaultClientActionHandlerRegistry(){
}

defineClass(226, 1, {}, DefaultClientActionHandlerRegistry);
var Lcom_gwtplatform_dispatch_client_actionhandler_DefaultClientActionHandlerRegistry_2_classLit = createForClass('com.gwtplatform.dispatch.client.actionhandler', 'DefaultClientActionHandlerRegistry', 226);
function $get_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$) {
    result = new DefaultClientActionHandlerRegistry;
    this$static.singleton_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_3(){
}

defineClass(125, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_3);
_.singleton_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$ = null;
var Lcom_gwtplatform_dispatch_client_actionhandler_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.dispatch.client.actionhandler', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 125);
function $get_Key$type$com$gwtplatform$dispatch$client$DefaultSecurityCookieAccessor$_annotation$$none$$(){
  var created;
  created = new DefaultSecurityCookieAccessor;
  return created;
}

function $get_Key$type$com$gwtplatform$dispatch$client$ExceptionHandler$_annotation$$com$gwtplatform$dispatch$rpc$client$RpcBinding$(){
  var result;
  result = new DefaultExceptionHandler;
  return result;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_4(){
}

defineClass(209, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_4);
var Lcom_gwtplatform_dispatch_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.dispatch.client', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 209);
function InterceptorMismatchException(requestedActionType, supportedActionType){
  RuntimeException.call(this);
  this.requestedActionType = requestedActionType;
  this.supportedActionType = supportedActionType;
}

defineClass(407, 7, $intern_3, InterceptorMismatchException);
_.toString$ = function toString_10(){
  return $ensureNamesAreInitialized(Lcom_gwtplatform_dispatch_client_interceptor_InterceptorMismatchException_2_classLit) , Lcom_gwtplatform_dispatch_client_interceptor_InterceptorMismatchException_2_classLit.typeName + ' [requestedActionType=' + this.requestedActionType + ', supportedActionType=' + this.supportedActionType + ']';
}
;
var Lcom_gwtplatform_dispatch_client_interceptor_InterceptorMismatchException_2_classLit = createForClass('com.gwtplatform.dispatch.client.interceptor', 'InterceptorMismatchException', 407);
function $create_0(this$static, action, callback){
  return new RpcDispatchExecuteCall(this$static.dispatchService, this$static.interceptorRegistry, action, callback);
}

function DefaultRpcDispatchCallFactory(dispatchService, interceptorRegistry){
  this.dispatchService = dispatchService;
  this.interceptorRegistry = interceptorRegistry;
}

defineClass(314, 1, {}, DefaultRpcDispatchCallFactory);
var Lcom_gwtplatform_dispatch_rpc_client_DefaultRpcDispatchCallFactory_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.client', 'DefaultRpcDispatchCallFactory', 314);
function DefaultRpcDispatchHooks(){
}

defineClass(315, 1, {}, DefaultRpcDispatchHooks);
var Lcom_gwtplatform_dispatch_rpc_client_DefaultRpcDispatchHooks_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.client', 'DefaultRpcDispatchHooks', 315);
function $execute_0(this$static, action, callback){
  var call_0, className, namePos;
  $setServiceEntryPoint(this$static.realService, this$static.baseUrl + (className = $getName(action.___clazz$) , namePos = className.lastIndexOf('.') + 1 , 'dispatch/' + __substr(className, namePos, className.length - namePos)));
  call_0 = $create_0(this$static.rpcDispatchCallFactory, action, callback);
  return $execute_1(call_0);
}

function RpcDispatchAsync(rpcDispatchCallFactory, dispatchService){
  var entryPointUrl;
  this.realService = dispatchService;
  this.rpcDispatchCallFactory = rpcDispatchCallFactory;
  entryPointUrl = this.realService.remoteServiceURL;
  entryPointUrl == null?(this.baseUrl = ''):(this.baseUrl = entryPointUrl);
}

defineClass(309, 1, {}, RpcDispatchAsync);
var Lcom_gwtplatform_dispatch_rpc_client_RpcDispatchAsync_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.client', 'RpcDispatchAsync', 309);
function $execute_1(this$static){
  var action, delegatingCallback, dispatchRequest, interceptorIndirectProvider, action_0;
  action = this$static.action;
  interceptorIndirectProvider = $find(this$static.interceptorRegistry, action);
  if (interceptorIndirectProvider) {
    dispatchRequest = new DelegatingDispatchRequest;
    delegatingCallback = new RpcInterceptedAsyncCallback(this$static, action, dispatchRequest);
    interceptorIndirectProvider.get_2(delegatingCallback);
    return dispatchRequest;
  }
   else {
    action_0 = this$static.action;
    action_0.___clazz$;
    return new GwtHttpDispatchRequest($execute_2(this$static.dispatchService, this$static.action, new RpcDispatchExecuteCall$1(this$static)));
  }
}

function RpcDispatchExecuteCall(dispatchService, interceptorRegistry, action, callback){
  this.action = action;
  this.callback = callback;
  this.dispatchService = dispatchService;
  this.interceptorRegistry = interceptorRegistry;
}

defineClass(378, 377, {}, RpcDispatchExecuteCall);
var Lcom_gwtplatform_dispatch_rpc_client_RpcDispatchExecuteCall_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.client', 'RpcDispatchExecuteCall', 378);
function $onFailure_0(this$static, caught){
  $onExecuteFailure(this$static.this$01, caught);
}

function $onSuccess_1(this$static, result){
  $onExecuteSuccess(this$static.this$01, result);
}

function RpcDispatchExecuteCall$1(this$0){
  this.this$01 = this$0;
}

defineClass(379, 1, {}, RpcDispatchExecuteCall$1);
_.onFailure_0 = function onFailure_1(caught){
  $onFailure_0(this, caught);
}
;
_.onSuccess = function onSuccess_1(result){
  $onSuccess_1(this, dynamicCast(result, 54));
}
;
var Lcom_gwtplatform_dispatch_rpc_client_RpcDispatchExecuteCall$1_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.client', 'RpcDispatchExecuteCall/1', 379);
function $get_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchAsync$_annotation$$none$$(this$static){
  var result;
  result = new RpcDispatchAsync($get_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchCallFactory$_annotation$$none$$(this$static), $get_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchServiceAsync$_annotation$$none$$($getFragment_com_gwtplatform_dispatch_rpc_client_gin(this$static.injector)));
  return result;
}

function $get_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchCallFactory$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchCallFactory$_annotation$$none$$) {
    result = new DefaultRpcDispatchCallFactory($get_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchServiceAsync$_annotation$$none$$($getFragment_com_gwtplatform_dispatch_rpc_client_gin(this$static.injector)), ($get_Key$type$com$gwtplatform$dispatch$client$ExceptionHandler$_annotation$$com$gwtplatform$dispatch$rpc$client$RpcBinding$($getFragment_com_gwtplatform_dispatch_client(this$static.injector)) , $get_Key$type$com$gwtplatform$dispatch$shared$SecurityCookieAccessor$_annotation$$com$gwtplatform$dispatch$rpc$client$RpcBinding$($getFragment_com_gwtplatform_dispatch_shared(this$static.injector)) , $get_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$($getFragment_com_gwtplatform_dispatch_client_actionhandler(this$static.injector)) , $get_Key$type$com$gwtplatform$dispatch$rpc$client$interceptor$RpcInterceptorRegistry$_annotation$$none$$($getFragment_com_gwtplatform_dispatch_rpc_client_interceptor(this$static.injector))), $get_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchHooks$_annotation$$none$$(this$static));
    this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchCallFactory$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchCallFactory$_annotation$$none$$;
}

function $get_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchHooks$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchHooks$_annotation$$none$$) {
    result = new DefaultRpcDispatchHooks;
    this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchHooks$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchHooks$_annotation$$none$$;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_5(injector){
  this.injector = injector;
}

defineClass(210, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_5);
_.singleton_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchCallFactory$_annotation$$none$$ = null;
_.singleton_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchHooks$_annotation$$none$$ = null;
var Lcom_gwtplatform_dispatch_rpc_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.client', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 210);
function $get_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchServiceAsync$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchServiceAsync$_annotation$$none$$) {
    result = new DispatchService_Proxy;
    this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchServiceAsync$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchServiceAsync$_annotation$$none$$;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_6(){
}

defineClass(215, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_6);
_.singleton_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchServiceAsync$_annotation$$none$$ = null;
var Lcom_gwtplatform_dispatch_rpc_client_gin_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.client.gin', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 215);
function $find(this$static, action){
  return dynamicCast(this$static.interceptors.get_3(action.___clazz$), 425);
}

function DefaultRpcInterceptorRegistry(){
  this.interceptors = new HashMap;
}

defineClass(316, 1, {}, DefaultRpcInterceptorRegistry);
var Lcom_gwtplatform_dispatch_rpc_client_interceptor_DefaultRpcInterceptorRegistry_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.client.interceptor', 'DefaultRpcInterceptorRegistry', 316);
function RpcInterceptedAsyncCallback(dispatchCall, action, dispatchRequest){
  this.dispatchCall = dispatchCall;
  this.action = action;
  this.dispatchRequest = dispatchRequest;
}

defineClass(384, 383, {}, RpcInterceptedAsyncCallback);
var Lcom_gwtplatform_dispatch_rpc_client_interceptor_RpcInterceptedAsyncCallback_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.client.interceptor', 'RpcInterceptedAsyncCallback', 384);
function $get_Key$type$com$gwtplatform$dispatch$rpc$client$interceptor$RpcInterceptorRegistry$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$client$interceptor$RpcInterceptorRegistry$_annotation$$none$$) {
    result = new DefaultRpcInterceptorRegistry;
    this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$client$interceptor$RpcInterceptorRegistry$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$client$interceptor$RpcInterceptorRegistry$_annotation$$none$$;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_7(){
}

defineClass(211, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_7);
_.singleton_Key$type$com$gwtplatform$dispatch$rpc$client$interceptor$RpcInterceptorRegistry$_annotation$$none$$ = null;
var Lcom_gwtplatform_dispatch_rpc_client_interceptor_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.client.interceptor', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 211);
defineClass(334, 1, $intern_25);
var Lcom_gwtplatform_dispatch_rpc_shared_AbstractSimpleResult_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.shared', 'AbstractSimpleResult', 334);
function setValue(instance, value_0){
  instance.value_0 = value_0;
}

defineClass(460, 1, {});
var Lcom_gwtplatform_dispatch_rpc_shared_ActionImpl_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.shared', 'ActionImpl', 460);
function serialize_18(streamWriter, instance){
}

function BatchResult(){
}

defineClass(354, 1, $intern_25, BatchResult);
var Lcom_gwtplatform_dispatch_rpc_shared_BatchResult_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.shared', 'BatchResult', 354);
function deserialize_18(streamReader, instance){
  setResults(instance, dynamicCast($readObject(streamReader), 9));
}

function instantiate_17(streamReader){
  return new BatchResult;
}

function serialize_19(streamWriter, instance){
  $writeObject(streamWriter, instance.results);
}

function setResults(instance, value_0){
  instance.results = value_0;
}

function $clinit_DispatchService_Proxy(){
  $clinit_DispatchService_Proxy = emptyMethod;
  SERIALIZER = new DispatchService_TypeSerializer;
}

function $createStreamWriter(this$static){
  var toReturn, clientSerializationStreamWriter;
  toReturn = (clientSerializationStreamWriter = new ClientSerializationStreamWriter(this$static.serializer, this$static.moduleBaseURL, this$static.serializationPolicyName) , clientSerializationStreamWriter.objectCount = 0 , $reset(clientSerializationStreamWriter.objectMap) , clientSerializationStreamWriter.stringMap.clear_0() , clientSerializationStreamWriter.stringTable.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1) , clientSerializationStreamWriter.encodeBuffer = new StringBuilder , $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.moduleBaseURL) , $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.serializationPolicyStrongName) , clientSerializationStreamWriter);
  return toReturn;
}

function $execute_2(this$static, action, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static);
  try {
    streamWriter = ($isStatsAvailable_0() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.gwtplatform.dispatch.rpc.shared.DispatchService') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 2) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, 'com.gwtplatform.dispatch.rpc.shared.Action'));
    $writeInt(streamWriter, $addString(streamWriter, null));
    $writeObject(streamWriter, action);
    return $finish_0(helper, callback, $clinit_RequestCallbackAdapter$ResponseReader());
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 73)) {
      ex = $e0;
      $onExecuteFailure(callback.this$01, ex);
      return new FailedRequest;
    }
     else 
      throw unwrap($e0);
  }
}

function DispatchService_Proxy(){
  $clinit_DispatchService_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), SERIALIZER);
}

defineClass(332, 331, {}, DispatchService_Proxy);
var SERIALIZER;
var Lcom_gwtplatform_dispatch_rpc_shared_DispatchService_1Proxy_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.shared', 'DispatchService_Proxy', 332);
function $clinit_DispatchService_TypeSerializer(){
  $clinit_DispatchService_TypeSerializer = emptyMethod;
  methodMapNative_0 = loadMethodsNative();
  signatureMapNative_0 = loadSignaturesNative();
}

function DispatchService_TypeSerializer(){
  $clinit_DispatchService_TypeSerializer();
  SerializerBase.call(this, methodMapNative_0, signatureMapNative_0);
}

function loadMethodsNative(){
  var result = {};
  result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate, deserialize, serialize];
  result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_0, deserialize_0];
  result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_0];
  result['com.google.gwt.user.client.ui.ChangeListenerCollection/287642957'] = [instantiate_4, deserialize_5, serialize_5];
  result['com.google.gwt.user.client.ui.ClickListenerCollection/2152455986'] = [instantiate_5, deserialize_6, serialize_6];
  result['com.google.gwt.user.client.ui.FocusListenerCollection/119490835'] = [instantiate_6, deserialize_7, serialize_7];
  result['com.google.gwt.user.client.ui.FormHandlerCollection/3088681894'] = [instantiate_7, deserialize_8, serialize_8];
  result['com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242'] = [instantiate_8, deserialize_9, serialize_9];
  result['com.google.gwt.user.client.ui.LoadListenerCollection/3174178888'] = [instantiate_9, deserialize_10, serialize_10];
  result['com.google.gwt.user.client.ui.MouseListenerCollection/465158911'] = [instantiate_10, deserialize_11, serialize_11];
  result['com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552'] = [instantiate_11, deserialize_12, serialize_12];
  result['com.google.gwt.user.client.ui.PopupListenerCollection/1920131050'] = [instantiate_12, deserialize_13, serialize_13];
  result['com.google.gwt.user.client.ui.ScrollListenerCollection/210686268'] = [instantiate_13, deserialize_14, serialize_14];
  result['com.google.gwt.user.client.ui.TabListenerCollection/3768293299'] = [instantiate_14, deserialize_15, serialize_15];
  result['com.google.gwt.user.client.ui.TableListenerCollection/2254740473'] = [instantiate_15, deserialize_16, serialize_16];
  result['com.google.gwt.user.client.ui.TreeListenerCollection/3716243734'] = [instantiate_16, deserialize_17, serialize_17];
  result['com.gwtplatform.dispatch.rpc.shared.ActionImpl/809952034'] = [undefined, undefined, serialize_18];
  result['com.gwtplatform.dispatch.rpc.shared.BatchResult/1124326542'] = [instantiate_17, deserialize_18, serialize_19];
  result['com.gwtplatform.dispatch.rpc.shared.MultipleResult/3717655381'] = [instantiate_18, deserialize_19, serialize_20];
  result['com.gwtplatform.dispatch.rpc.shared.NoResult/1692581133'] = [instantiate_19, deserialize_20, serialize_21];
  result['com.gwtplatform.dispatch.rpc.shared.ServiceException/3931594900'] = [instantiate_20, deserialize_21];
  result['com.gwtplatform.dispatch.rpc.shared.UnsecuredActionImpl/412053526'] = [undefined, undefined, serialize_22];
  result['com.gwtplatform.dispatch.rpc.shared.UnsupportedActionException/1628260723'] = [instantiate_21, deserialize_22];
  result['com.gwtplatform.dispatch.shared.ActionException/2451163915'] = [instantiate_22, deserialize_23];
  result['com.vypersw.finances.client.actions.LoginAction/70821785'] = [undefined, undefined, serialize_23];
  result['com.vypersw.finances.client.actions.LogoutAction/3080151102'] = [undefined, undefined, serialize_24];
  result['com.vypersw.finances.client.results.LoginActionResult/3449422460'] = [instantiate_23, deserialize_24, serialize_25];
  result['com.vypersw.finances.client.results.LogoutActionResult/1446446497'] = [instantiate_24, deserialize_25, serialize_26];
  result['java.lang.String/2004016611'] = [instantiate_1, deserialize_1, serialize_1];
  result['java.lang.Void/2139725816'] = [instantiate_2, deserialize_2, serialize_2];
  result['java.util.ArrayList/4159755760'] = [instantiate_3, deserialize_3, serialize_3];
  return result;
}

function loadSignaturesNative(){
  var result = [];
  result[getHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533';
  result[getHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298';
  result[getHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109';
  result[getHashCode(Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ChangeListenerCollection/287642957';
  result[getHashCode(Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ClickListenerCollection/2152455986';
  result[getHashCode(Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FocusListenerCollection/119490835';
  result[getHashCode(Lcom_google_gwt_user_client_ui_FormHandlerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FormHandlerCollection/3088681894';
  result[getHashCode(Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242';
  result[getHashCode(Lcom_google_gwt_user_client_ui_LoadListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.LoadListenerCollection/3174178888';
  result[getHashCode(Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseListenerCollection/465158911';
  result[getHashCode(Lcom_google_gwt_user_client_ui_MouseWheelListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552';
  result[getHashCode(Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.PopupListenerCollection/1920131050';
  result[getHashCode(Lcom_google_gwt_user_client_ui_ScrollListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ScrollListenerCollection/210686268';
  result[getHashCode(Lcom_google_gwt_user_client_ui_TabListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TabListenerCollection/3768293299';
  result[getHashCode(Lcom_google_gwt_user_client_ui_TableListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TableListenerCollection/2254740473';
  result[getHashCode(Lcom_google_gwt_user_client_ui_TreeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TreeListenerCollection/3716243734';
  result[getHashCode(Lcom_gwtplatform_dispatch_rpc_shared_ActionImpl_2_classLit)] = 'com.gwtplatform.dispatch.rpc.shared.ActionImpl/809952034';
  result[getHashCode(Lcom_gwtplatform_dispatch_rpc_shared_BatchResult_2_classLit)] = 'com.gwtplatform.dispatch.rpc.shared.BatchResult/1124326542';
  result[getHashCode(Lcom_gwtplatform_dispatch_rpc_shared_MultipleResult_2_classLit)] = 'com.gwtplatform.dispatch.rpc.shared.MultipleResult/3717655381';
  result[getHashCode(Lcom_gwtplatform_dispatch_rpc_shared_NoResult_2_classLit)] = 'com.gwtplatform.dispatch.rpc.shared.NoResult/1692581133';
  result[getHashCode(Lcom_gwtplatform_dispatch_rpc_shared_ServiceException_2_classLit)] = 'com.gwtplatform.dispatch.rpc.shared.ServiceException/3931594900';
  result[getHashCode(Lcom_gwtplatform_dispatch_rpc_shared_UnsecuredActionImpl_2_classLit)] = 'com.gwtplatform.dispatch.rpc.shared.UnsecuredActionImpl/412053526';
  result[getHashCode(Lcom_gwtplatform_dispatch_rpc_shared_UnsupportedActionException_2_classLit)] = 'com.gwtplatform.dispatch.rpc.shared.UnsupportedActionException/1628260723';
  result[getHashCode(Lcom_gwtplatform_dispatch_shared_ActionException_2_classLit)] = 'com.gwtplatform.dispatch.shared.ActionException/2451163915';
  result[getHashCode(Lcom_vypersw_finances_client_actions_LoginAction_2_classLit)] = 'com.vypersw.finances.client.actions.LoginAction/70821785';
  result[getHashCode(Lcom_vypersw_finances_client_actions_LogoutAction_2_classLit)] = 'com.vypersw.finances.client.actions.LogoutAction/3080151102';
  result[getHashCode(Lcom_vypersw_finances_client_results_LoginActionResult_2_classLit)] = 'com.vypersw.finances.client.results.LoginActionResult/3449422460';
  result[getHashCode(Lcom_vypersw_finances_client_results_LogoutActionResult_2_classLit)] = 'com.vypersw.finances.client.results.LogoutActionResult/1446446497';
  result[getHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611';
  result[getHashCode(Ljava_lang_Void_2_classLit)] = 'java.lang.Void/2139725816';
  result[getHashCode(Ljava_util_ArrayList_2_classLit)] = 'java.util.ArrayList/4159755760';
  return result;
}

defineClass(339, 338, {}, DispatchService_TypeSerializer);
var methodMapNative_0, signatureMapNative_0;
var Lcom_gwtplatform_dispatch_rpc_shared_DispatchService_1TypeSerializer_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.shared', 'DispatchService_TypeSerializer', 339);
function MultipleResult(){
}

defineClass(355, 1, $intern_25, MultipleResult);
var Lcom_gwtplatform_dispatch_rpc_shared_MultipleResult_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.shared', 'MultipleResult', 355);
function deserialize_19(streamReader, instance){
  setValue_0(instance, dynamicCast($readObject(streamReader), 9));
}

function instantiate_18(streamReader){
  return new MultipleResult;
}

function serialize_20(streamWriter, instance){
  $writeObject(streamWriter, instance.value_0);
}

function setValue_0(instance, value_0){
  instance.value_0 = value_0;
}

function NoResult(){
}

defineClass(356, 1, $intern_25, NoResult);
var Lcom_gwtplatform_dispatch_rpc_shared_NoResult_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.shared', 'NoResult', 356);
function deserialize_20(streamReader, instance){
}

function instantiate_19(streamReader){
  return new NoResult;
}

function serialize_21(streamWriter, instance){
}

function ServiceException(){
  Exception.call(this);
}

defineClass(142, 10, $intern_2, ServiceException);
var Lcom_gwtplatform_dispatch_rpc_shared_ServiceException_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.shared', 'ServiceException', 142);
function deserialize_21(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_20(streamReader){
  return new ServiceException;
}

function SimpleResult(){
  this.value_0 = null;
}

defineClass(140, 334, $intern_25);
var Lcom_gwtplatform_dispatch_rpc_shared_SimpleResult_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.shared', 'SimpleResult', 140);
function serialize_22(streamWriter, instance){
}

function UnsupportedActionException(){
  ServiceException.call(this);
}

defineClass(357, 142, $intern_2, UnsupportedActionException);
var Lcom_gwtplatform_dispatch_rpc_shared_UnsupportedActionException_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.shared', 'UnsupportedActionException', 357);
function deserialize_22(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_21(streamReader){
  return new UnsupportedActionException;
}

function $get_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchAsync$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchAsync$_annotation$$none$$) {
    result = $get_Key$type$com$gwtplatform$dispatch$rpc$client$RpcDispatchAsync$_annotation$$none$$($getFragment_com_gwtplatform_dispatch_rpc_client(this$static.injector));
    this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchAsync$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchAsync$_annotation$$none$$;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_8(injector){
  this.injector = injector;
}

defineClass(214, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_8);
_.singleton_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchAsync$_annotation$$none$$ = null;
var Lcom_gwtplatform_dispatch_rpc_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.shared', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 214);
function ActionException(){
  Exception.call(this);
}

defineClass(358, 10, $intern_2, ActionException);
var Lcom_gwtplatform_dispatch_shared_ActionException_2_classLit = createForClass('com.gwtplatform.dispatch.shared', 'ActionException', 358);
function deserialize_23(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_22(streamReader){
  return new ActionException;
}

function $get_Key$type$com$gwtplatform$dispatch$shared$SecurityCookieAccessor$_annotation$$com$gwtplatform$dispatch$rpc$client$RpcBinding$(this$static){
  var result;
  result = $get_Key$type$com$gwtplatform$dispatch$client$DefaultSecurityCookieAccessor$_annotation$$none$$($getFragment_com_gwtplatform_dispatch_client(this$static.injector));
  return result;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_9(injector){
  this.injector = injector;
}

defineClass(213, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_9);
var Lcom_gwtplatform_dispatch_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.dispatch.shared', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 213);
function AutobindDisable(){
  this.disable = false;
}

defineClass(235, 1, {}, AutobindDisable);
_.disable = false;
var Lcom_gwtplatform_mvp_client_AutobindDisable_2_classLit = createForClass('com.gwtplatform.mvp.client', 'AutobindDisable', 235);
function $clinit_ClientGinjector(){
  $clinit_ClientGinjector = emptyMethod;
  SINGLETON = new com_gwtplatform_mvp_client_DesktopGinjectorImpl;
}

var SINGLETON;
function DefaultBootstrapper(placeManager){
  this.placeManager = placeManager;
}

defineClass(177, 1, {}, DefaultBootstrapper);
var Lcom_gwtplatform_mvp_client_DefaultBootstrapper_2_classLit = createForClass('com.gwtplatform.mvp.client', 'DefaultBootstrapper', 177);
function $clinit_DelayedBindRegistry(){
  $clinit_DelayedBindRegistry = emptyMethod;
  delayedBindObjects = new ArrayList;
}

function bind_0(ginjector){
  $clinit_DelayedBindRegistry();
  var delayedBindObject, delayedBindObject$iterator;
  for (delayedBindObject$iterator = new AbstractList$IteratorImpl(delayedBindObjects); delayedBindObject$iterator.i < delayedBindObject$iterator.this$01_0.size_1();) {
    delayedBindObject = (checkCriticalElement(delayedBindObject$iterator.i < delayedBindObject$iterator.this$01_0.size_1()) , dynamicCast(delayedBindObject$iterator.this$01_0.get_0(delayedBindObject$iterator.last = delayedBindObject$iterator.i++), 106));
    delayedBindObject.delayedBind(ginjector);
  }
}

var delayedBindObjects;
function $automaticBind(this$static, autobindDisable){
  if (!this$static.autoBind || autobindDisable.disable) {
    return;
  }
  this$static.bind_0();
}

function $bind(this$static){
  if (!this$static.bound.value_0) {
    this$static.onBind();
    this$static.bound.value_0 = true;
  }
}

function $registerHandler(this$static, handlerRegistration){
  $add_3(this$static.handlerRegistrations, handlerRegistration);
}

function HandlerContainerImpl(){
  this.bound = new HandlerContainerImpl$BindMonitor;
  this.handlerRegistrations = new ArrayList;
  this.autoBind = true;
}

defineClass(91, 1, {});
_.bind_0 = function bind_1(){
  $bind(this);
}
;
_.onBind = function onBind(){
}
;
_.autoBind = false;
var Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2_classLit = createForClass('com.gwtplatform.mvp.client', 'HandlerContainerImpl', 91);
function HandlerContainerImpl$BindMonitor(){
}

defineClass(194, 1, {}, HandlerContainerImpl$BindMonitor);
_.value_0 = false;
var Lcom_gwtplatform_mvp_client_HandlerContainerImpl$BindMonitor_2_classLit = createForClass('com.gwtplatform.mvp.client', 'HandlerContainerImpl/BindMonitor', 194);
function $clinit_PresenterWidget(){
  $clinit_PresenterWidget = emptyMethod;
  POPUP_SLOT = new Object_0;
}

function $addHandler_1(this$static, type_0, handler){
  return $doAdd(this$static.eventBus, type_0, handler);
}

function $addRegisteredHandler(this$static, type_0, handler){
  $registerHandler(this$static, $doAdd(this$static.eventBus, type_0, handler));
}

function $addToPopupSlot(this$static, child){
  $addToSlot(this$static, POPUP_SLOT, child);
}

function $addToSlot(this$static, slot, child){
  if (maskUndefined(child.slot_0) === maskUndefined(slot) && child.parent_0 == this$static) {
    return;
  }
  $adoptChild(this$static, slot, child);
  this$static.visible && $internalReveal(child);
}

function $adoptChild(this$static, slot, child){
  if (child.parent_0 != this$static) {
    !!child.parent_0 && $remove_6(child.parent_0.children, child);
    child.parent_0 = this$static;
    $add_7(this$static.children, child);
  }
  child.slot_0 = slot;
}

function $fireEvent_1(this$static, event_0){
  $doFire(this$static.eventBus, event_0, this$static);
}

function $internalClearSlot(this$static, slot, dontRemove){
  var child, child$iterator;
  for (child$iterator = $iterator(new AbstractMap$1((new HashSet_0(this$static.children)).map_0)); child$iterator.val$outerIter2.hasNext();) {
    child = dynamicCast($next_0(child$iterator), 29);
    maskUndefined(child.slot_0) === maskUndefined(slot) && child != dontRemove && $orphan(child);
  }
}

function $internalHide(this$static){
  var child, child$iterator;
  if (!this$static.visible) {
    return;
  }
  for (child$iterator = $iterator(new AbstractMap$1(this$static.children.map_0)); child$iterator.val$outerIter2.hasNext();) {
    child = dynamicCast($next_0(child$iterator), 29);
    $internalHide(child);
  }
  if (maskUndefined(this$static.slot_0) === maskUndefined(POPUP_SLOT)) {
    throwClassCastExceptionUnlessNull(this$static.view).nullMethod();
    throwClassCastExceptionUnlessNull(this$static.view).nullMethod();
  }
  $unregisterVisibleHandlers(this$static);
  this$static.visible = false;
}

function $internalReset(this$static){
  var child, child$iterator;
  if (!this$static.visible) {
    return;
  }
  this$static.onReset();
  for (child$iterator = $iterator(new AbstractMap$1((new HashSet_0(this$static.children)).map_0)); child$iterator.val$outerIter2.hasNext();) {
    child = dynamicCast($next_0(child$iterator), 29);
    $internalReset(child);
  }
  maskUndefined(this$static.slot_0) === maskUndefined(POPUP_SLOT) && throwClassCastExceptionUnlessNull(this$static.view).nullMethod();
}

function $internalReveal(this$static){
  var child, child$iterator;
  if (this$static.visible) {
    return;
  }
  this$static.visible = true;
  for (child$iterator = $iterator(new AbstractMap$1((new HashSet_0(this$static.children)).map_0)); child$iterator.val$outerIter2.hasNext();) {
    child = dynamicCast($next_0(child$iterator), 29);
    $internalReveal(child);
  }
  if (maskUndefined(this$static.slot_0) === maskUndefined(POPUP_SLOT)) {
    throwClassCastExceptionUnlessNull(this$static.view);
    null.nullMethod();
    throwClassCastExceptionUnlessNull(this$static.view).nullMethod();
  }
  $registerVisibleHandlers(this$static);
}

function $orphan(this$static){
  if (this$static.parent_0) {
    $internalHide(this$static);
    $remove_6(this$static.parent_0.children, this$static);
    this$static.parent_0 = null;
  }
  this$static.slot_0 = null;
}

function $registerVisibleHandlers(this$static){
  var handlerInformation$iterator, handlerRegistration;
  for (handlerInformation$iterator = new AbstractList$IteratorImpl(this$static.visibleHandlers); handlerInformation$iterator.i < handlerInformation$iterator.this$01_0.size_1();) {
    checkCriticalElement(handlerInformation$iterator.i < handlerInformation$iterator.this$01_0.size_1());
    throwClassCastExceptionUnlessNull(handlerInformation$iterator.this$01_0.get_0(handlerInformation$iterator.last = handlerInformation$iterator.i++));
    handlerRegistration = $addHandler_1(this$static, null.nullField, null.nullField);
    $add_3(this$static.visibleHandlerRegistrations, handlerRegistration);
  }
}

function $setInSlot(this$static, slot, child){
  if (!child) {
    $internalClearSlot(this$static, slot, null);
    this$static.view.setInSlot(slot, null);
    return;
  }
  $adoptChild(this$static, slot, child);
  $internalClearSlot(this$static, slot, child);
  this$static.view.setInSlot(slot, child);
  if (this$static.visible) {
    $internalReveal(child);
    $clinit_ResetPresentersEvent();
    $fireEvent_1(this$static, new ResetPresentersEvent);
  }
}

function $unregisterVisibleHandlers(this$static){
  var handlerRegistration, handlerRegistration$iterator;
  for (handlerRegistration$iterator = new AbstractList$IteratorImpl(this$static.visibleHandlerRegistrations); handlerRegistration$iterator.i < handlerRegistration$iterator.this$01_0.size_1();) {
    handlerRegistration = (checkCriticalElement(handlerRegistration$iterator.i < handlerRegistration$iterator.this$01_0.size_1()) , dynamicCast(handlerRegistration$iterator.this$01_0.get_0(handlerRegistration$iterator.last = handlerRegistration$iterator.i++), 422));
    handlerRegistration.removeHandler();
  }
  this$static.visibleHandlerRegistrations.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
}

function PresenterWidget(eventBus, view){
  $clinit_PresenterWidget();
  HandlerContainerImpl.call(this);
  this.visibleHandlers = new ArrayList;
  this.visibleHandlerRegistrations = new ArrayList;
  this.children = new HashSet;
  this.eventBus = eventBus;
  this.view = view;
}

defineClass(29, 91, {12:1, 15:1, 29:1});
_.equals$ = function equals_4(obj){
  return this === obj;
}
;
_.hashCode$ = function hashCode_6(){
  return getHashCode(this);
}
;
_.onReset = function onReset(){
}
;
_.visible = false;
var POPUP_SLOT;
var Lcom_gwtplatform_mvp_client_PresenterWidget_2_classLit = createForClass('com.gwtplatform.mvp.client', 'PresenterWidget', 29);
function $forceReveal(this$static){
  if (this$static.visible) {
    return;
  }
  this$static.revealInParent();
}

function Presenter(eventBus, view, proxy, revealType){
  Presenter_0.call(this, eventBus, view, proxy, revealType);
}

function Presenter_0(eventBus, view, proxy, revealType){
  PresenterWidget.call(this, eventBus, view);
  this.proxy = proxy;
  this.revealType = revealType;
  this.slot = null;
}

defineClass(43, 29, {12:1, 15:1, 43:1, 29:1});
_.bind_0 = function bind_2(){
  $bind(this);
  !!this.proxy && $bind_2(this.proxy.handlerContainer);
}
;
_.prepareFromRequest = function prepareFromRequest(request){
}
;
_.revealInParent = function revealInParent(){
  if (this.revealType) {
    switch (this.revealType.ordinal) {
      case 0:
        $clinit_RevealRootContentEvent();
        $fireEvent_1(this, new RevealRootContentEvent(this));
        break;
      case 1:
        $clinit_RevealRootLayoutContentEvent();
        $fireEvent_1(this, new RevealRootLayoutContentEvent(this));
        break;
      case 2:
        $clinit_RevealRootPopupContentEvent();
        $fireEvent_1(this, new RevealRootPopupContentEvent(this));
    }
  }
   else {
    $fireEvent_1(this, new RevealContentEvent(this.slot, this));
  }
}
;
var Lcom_gwtplatform_mvp_client_Presenter_2_classLit = createForClass('com.gwtplatform.mvp.client', 'Presenter', 43);
function $clinit_Presenter$RevealType(){
  $clinit_Presenter$RevealType = emptyMethod;
  Root = new Presenter$RevealType('Root', 0);
  RootLayout = new Presenter$RevealType('RootLayout', 1);
  RootPopup = new Presenter$RevealType('RootPopup', 2);
}

function Presenter$RevealType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_Presenter$RevealType();
  return initValues(getClassLiteralForArray(Lcom_gwtplatform_mvp_client_Presenter$RevealType_2_classLit, 1), $intern_4, 66, 0, [Root, RootLayout, RootPopup]);
}

defineClass(66, 4, {66:1, 3:1, 6:1, 4:1}, Presenter$RevealType);
var Root, RootLayout, RootPopup;
var Lcom_gwtplatform_mvp_client_Presenter$RevealType_2_classLit = createForEnum('com.gwtplatform.mvp.client', 'Presenter/RevealType', 66, Ljava_lang_Enum_2_classLit, values_9);
function $clinit_RootPresenter(){
  $clinit_RootPresenter = emptyMethod;
  $clinit_PresenterWidget();
  rootSlot = new Object_0;
}

function $onResetPresenters(this$static){
  if (!this$static.isResetting) {
    this$static.isResetting = true;
    $internalReset(this$static);
    this$static.isResetting = false;
  }
}

function RootPresenter(eventBus, view){
  $clinit_RootPresenter();
  PresenterWidget.call(this, eventBus, view);
  this.visible = true;
}

defineClass(193, 29, {28:1, 12:1, 15:1, 29:1, 470:1, 466:1, 467:1, 468:1, 469:1}, RootPresenter);
_.onBind = function onBind_0(){
  $addRegisteredHandler(this, ($clinit_ResetPresentersEvent() , $clinit_ResetPresentersEvent() , type_1), this);
  $addRegisteredHandler(this, ($clinit_RevealRootContentEvent() , $clinit_RevealRootContentEvent() , TYPE_13), this);
  $addRegisteredHandler(this, ($clinit_RevealRootLayoutContentEvent() , $clinit_RevealRootLayoutContentEvent() , TYPE_14), this);
  $addRegisteredHandler(this, ($clinit_RevealRootPopupContentEvent() , $clinit_RevealRootPopupContentEvent() , TYPE_15), this);
  $addRegisteredHandler(this, (!TYPE_10 && (TYPE_10 = new GwtEvent$Type) , TYPE_10), this);
}
;
_.isResetting = false;
var rootSlot;
var Lcom_gwtplatform_mvp_client_RootPresenter_2_classLit = createForClass('com.gwtplatform.mvp.client', 'RootPresenter', 193);
function $asWidget(this$static){
  if (!this$static.widget) {
    throw new NullPointerException_0('widget cannot be null, you should call ViewImpl.initWidget() before.');
  }
  return this$static.widget;
}

function $initWidget(this$static, widget){
  if (this$static.widget) {
    throw new IllegalStateException_0('ViewImpl.initWidget() may only be called once.');
  }
  this$static.widget = widget;
  $addHandler_0($asWidget(this$static), new ViewImpl$1, (!TYPE_1 && (TYPE_1 = new GwtEvent$Type) , TYPE_1));
}

defineClass(448, 1, {15:1});
_.asWidget = function asWidget(){
  return $asWidget(this);
}
;
_.setInSlot = function setInSlot(slot, content_0){
}
;
var Lcom_gwtplatform_mvp_client_ViewImpl_2_classLit = createForClass('com.gwtplatform.mvp.client', 'ViewImpl', 448);
function $ensureGlass(this$static){
  var style;
  if (!this$static.glass) {
    this$static.glass = $doc.createElement('div');
    style = this$static.glass.style;
    $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
    $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
    $setPropertyImpl(style, 'top', '0.0px');
    $setPropertyImpl(style, 'right', '0.0px');
    $setPropertyImpl(style, 'bottom', '0.0px');
    $setPropertyImpl(style, 'zIndex', '2147483647');
    $setPropertyImpl(style, 'backgroundColor', '#FFFFFF');
    style.opacity = 0;
  }
}

function $lockScreen(this$static){
  $ensureGlass(this$static);
  $appendChild($doc.body, this$static.glass);
}

function $setInSlot_0(this$static, content_0){
  if (this$static.usingRootLayoutPanel) {
    $clear_0(($clinit_RootPanel() , get_2()));
    $clear_0(get_1());
    $add_2(get_2(), get_1());
    !!content_0 && $add_5(get_1(), !content_0?null:content_0.view.asWidget());
  }
   else {
    $clear_0(get_1());
    $clear_0(($clinit_RootPanel() , get_2()));
    !!content_0 && $add_2(get_2(), !content_0?null:content_0.view.asWidget());
  }
}

function $setUsingRootLayoutPanel(this$static, usingRootLayoutPanel){
  this$static.usingRootLayoutPanel = usingRootLayoutPanel;
}

function $unlockScreen(this$static){
  !!this$static.glass && $removeFromParent(this$static.glass);
}

function RootPresenter$RootView(){
}

defineClass(56, 448, $intern_26, RootPresenter$RootView);
_.asWidget = function asWidget_0(){
  return null;
}
;
_.setInSlot = function setInSlot_0(slot, content_0){
  $setInSlot_0(this, content_0);
}
;
_.usingRootLayoutPanel = false;
var Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2_classLit = createForClass('com.gwtplatform.mvp.client', 'RootPresenter/RootView', 56);
function ViewImpl$1(){
}

defineClass(195, 1, {471:1, 28:1}, ViewImpl$1);
var Lcom_gwtplatform_mvp_client_ViewImpl$1_2_classLit = createForClass('com.gwtplatform.mvp.client', 'ViewImpl/1', 195);
function $clinit_ViewWithUiHandlers(){
  $clinit_ViewWithUiHandlers = emptyMethod;
  $ensureNamesAreInitialized(Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit);
}

defineClass(454, 448, {15:1});
_.setUiHandlers = function setUiHandlers(uiHandlers){
  this.uiHandlers = uiHandlers;
}
;
var Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit = createForClass('com.gwtplatform.mvp.client', 'ViewWithUiHandlers', 454);
function com_gwtplatform_mvp_client_DesktopGinjectorImpl(){
  this.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector;
  $initializeEagerSingletons(this.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector);
}

defineClass(187, 1, {}, com_gwtplatform_mvp_client_DesktopGinjectorImpl);
var Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_2_classLit = createForClass('com.gwtplatform.mvp.client', 'com_gwtplatform_mvp_client_DesktopGinjectorImpl', 187);
function $getFragment_com_google_gwt_place_shared(this$static){
  !this$static.fieldFragment_com$google$gwt$place$shared && (this$static.fieldFragment_com$google$gwt$place$shared = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment);
  return this$static.fieldFragment_com$google$gwt$place$shared;
}

function $getFragment_com_google_web_bindery_event_shared(this$static){
  !this$static.fieldFragment_com$google$web$bindery$event$shared && (this$static.fieldFragment_com$google$web$bindery$event$shared = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_0);
  return this$static.fieldFragment_com$google$web$bindery$event$shared;
}

function $getFragment_com_gwtplatform_common_client(this$static){
  !this$static.fieldFragment_com$gwtplatform$common$client && (this$static.fieldFragment_com$gwtplatform$common$client = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_1);
  return this$static.fieldFragment_com$gwtplatform$common$client;
}

function $getFragment_com_gwtplatform_common_shared(this$static){
  !this$static.fieldFragment_com$gwtplatform$common$shared && (this$static.fieldFragment_com$gwtplatform$common$shared = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_2(this$static));
  return this$static.fieldFragment_com$gwtplatform$common$shared;
}

function $getFragment_com_gwtplatform_dispatch_client(this$static){
  !this$static.fieldFragment_com$gwtplatform$dispatch$client && (this$static.fieldFragment_com$gwtplatform$dispatch$client = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_4);
  return this$static.fieldFragment_com$gwtplatform$dispatch$client;
}

function $getFragment_com_gwtplatform_dispatch_client_actionhandler(this$static){
  !this$static.fieldFragment_com$gwtplatform$dispatch$client$actionhandler && (this$static.fieldFragment_com$gwtplatform$dispatch$client$actionhandler = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_3);
  return this$static.fieldFragment_com$gwtplatform$dispatch$client$actionhandler;
}

function $getFragment_com_gwtplatform_dispatch_rpc_client(this$static){
  !this$static.fieldFragment_com$gwtplatform$dispatch$rpc$client && (this$static.fieldFragment_com$gwtplatform$dispatch$rpc$client = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_5(this$static));
  return this$static.fieldFragment_com$gwtplatform$dispatch$rpc$client;
}

function $getFragment_com_gwtplatform_dispatch_rpc_client_gin(this$static){
  !this$static.fieldFragment_com$gwtplatform$dispatch$rpc$client$gin && (this$static.fieldFragment_com$gwtplatform$dispatch$rpc$client$gin = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_6);
  return this$static.fieldFragment_com$gwtplatform$dispatch$rpc$client$gin;
}

function $getFragment_com_gwtplatform_dispatch_rpc_client_interceptor(this$static){
  !this$static.fieldFragment_com$gwtplatform$dispatch$rpc$client$interceptor && (this$static.fieldFragment_com$gwtplatform$dispatch$rpc$client$interceptor = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_7);
  return this$static.fieldFragment_com$gwtplatform$dispatch$rpc$client$interceptor;
}

function $getFragment_com_gwtplatform_dispatch_rpc_shared(this$static){
  !this$static.fieldFragment_com$gwtplatform$dispatch$rpc$shared && (this$static.fieldFragment_com$gwtplatform$dispatch$rpc$shared = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_8(this$static));
  return this$static.fieldFragment_com$gwtplatform$dispatch$rpc$shared;
}

function $getFragment_com_gwtplatform_dispatch_shared(this$static){
  !this$static.fieldFragment_com$gwtplatform$dispatch$shared && (this$static.fieldFragment_com$gwtplatform$dispatch$shared = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_9(this$static));
  return this$static.fieldFragment_com$gwtplatform$dispatch$shared;
}

function $getFragment_com_gwtplatform_mvp_client(this$static){
  !this$static.fieldFragment_com$gwtplatform$mvp$client && (this$static.fieldFragment_com$gwtplatform$mvp$client = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_10(this$static));
  return this$static.fieldFragment_com$gwtplatform$mvp$client;
}

function $getFragment_com_gwtplatform_mvp_client_proxy(this$static){
  !this$static.fieldFragment_com$gwtplatform$mvp$client$proxy && (this$static.fieldFragment_com$gwtplatform$mvp$client$proxy = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_11(this$static));
  return this$static.fieldFragment_com$gwtplatform$mvp$client$proxy;
}

function $getFragment_com_gwtplatform_mvp_shared_proxy(this$static){
  !this$static.fieldFragment_com$gwtplatform$mvp$shared$proxy && (this$static.fieldFragment_com$gwtplatform$mvp$shared$proxy = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_12(this$static));
  return this$static.fieldFragment_com$gwtplatform$mvp$shared$proxy;
}

function $getFragment_com_vypersw_finances_client_application(this$static){
  !this$static.fieldFragment_com$vypersw$finances$client$application && (this$static.fieldFragment_com$vypersw$finances$client$application = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_13(this$static));
  return this$static.fieldFragment_com$vypersw$finances$client$application;
}

function $getFragment_com_vypersw_finances_client_login(this$static){
  !this$static.fieldFragment_com$vypersw$finances$client$login && (this$static.fieldFragment_com$vypersw$finances$client$login = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_14(this$static));
  return this$static.fieldFragment_com$vypersw$finances$client$login;
}

function $initializeEagerSingletons(this$static){
  $get_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$((!this$static.fieldFragment_com$gwtplatform$mvp$client && (this$static.fieldFragment_com$gwtplatform$mvp$client = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_10(this$static)) , this$static.fieldFragment_com$gwtplatform$mvp$client));
  $get_Key$type$com$vypersw$finances$client$application$ApplicationPresenter$MyProxy$_annotation$$none$$((!this$static.fieldFragment_com$vypersw$finances$client$application && (this$static.fieldFragment_com$vypersw$finances$client$application = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_13(this$static)) , this$static.fieldFragment_com$vypersw$finances$client$application));
  $get_Key$type$com$vypersw$finances$client$login$LoginPresenter$MyProxy$_annotation$$none$$((!this$static.fieldFragment_com$vypersw$finances$client$login && (this$static.fieldFragment_com$vypersw$finances$client$login = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_14(this$static)) , this$static.fieldFragment_com$vypersw$finances$client$login));
  $get_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$((!this$static.fieldFragment_com$gwtplatform$dispatch$client$actionhandler && (this$static.fieldFragment_com$gwtplatform$dispatch$client$actionhandler = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_3) , this$static.fieldFragment_com$gwtplatform$dispatch$client$actionhandler));
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector(){
}

defineClass(188, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector);
_.fieldFragment_com$google$gwt$place$shared = null;
_.fieldFragment_com$google$web$bindery$event$shared = null;
_.fieldFragment_com$gwtplatform$common$client = null;
_.fieldFragment_com$gwtplatform$common$shared = null;
_.fieldFragment_com$gwtplatform$dispatch$client = null;
_.fieldFragment_com$gwtplatform$dispatch$client$actionhandler = null;
_.fieldFragment_com$gwtplatform$dispatch$rpc$client = null;
_.fieldFragment_com$gwtplatform$dispatch$rpc$client$gin = null;
_.fieldFragment_com$gwtplatform$dispatch$rpc$client$interceptor = null;
_.fieldFragment_com$gwtplatform$dispatch$rpc$shared = null;
_.fieldFragment_com$gwtplatform$dispatch$shared = null;
_.fieldFragment_com$gwtplatform$mvp$client = null;
_.fieldFragment_com$gwtplatform$mvp$client$proxy = null;
_.fieldFragment_com$gwtplatform$mvp$shared$proxy = null;
_.fieldFragment_com$vypersw$finances$client$application = null;
_.fieldFragment_com$vypersw$finances$client$login = null;
_.fieldFragment_com$vypersw$finances$client$perspective = null;
var Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2_classLit = createForClass('com.gwtplatform.mvp.client', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector', 188);
function $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$) {
    result = new AutobindDisable;
    this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$;
}

function $get_Key$type$com$gwtplatform$mvp$client$DefaultBootstrapper$_annotation$$none$$(this$static){
  var result;
  result = new DefaultBootstrapper($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.injector)));
  return result;
}

function $get_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$) {
    result = new RootPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), new RootPresenter$RootView);
    $automaticBind(result, $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$(this$static));
    this$static.singleton_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$;
}

function $get_Key$type$java$lang$String$_annotation$$com$gwtplatform$mvp$client$annotations$DefaultPlace$(){
  return '/login';
}

function $get_Key$type$java$lang$String$_annotation$$com$gwtplatform$mvp$client$annotations$ErrorPlace$(){
  return '/login';
}

function $get_Key$type$java$lang$String$_annotation$$com$gwtplatform$mvp$client$annotations$UnauthorizedPlace$(){
  return '/login';
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_10(injector){
  this.injector = injector;
}

defineClass(122, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_10);
_.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = null;
_.singleton_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$ = null;
var Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.mvp.client', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 122);
function $clinit_AsyncCallFailEvent(){
  $clinit_AsyncCallFailEvent = emptyMethod;
  TYPE_6 = new GwtEvent$Type;
}

function AsyncCallFailEvent(){
  $clinit_AsyncCallFailEvent();
}

defineClass(306, 450, {}, AsyncCallFailEvent);
_.dispatch = function dispatch_6(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_gwtplatform_mvp_client_proxy_AsyncCallFailEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'AsyncCallFailEvent', 306);
function $clinit_AsyncCallStartEvent(){
  $clinit_AsyncCallStartEvent = emptyMethod;
  TYPE_7 = new GwtEvent$Type;
}

function AsyncCallStartEvent(){
  $clinit_AsyncCallStartEvent();
}

defineClass(308, 450, {}, AsyncCallStartEvent);
_.dispatch = function dispatch_7(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_7;
}
;
var TYPE_7;
var Lcom_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'AsyncCallStartEvent', 308);
function $clinit_AsyncCallSucceedEvent(){
  $clinit_AsyncCallSucceedEvent = emptyMethod;
  TYPE_8 = new GwtEvent$Type;
}

function AsyncCallSucceedEvent(){
  $clinit_AsyncCallSucceedEvent();
}

defineClass(307, 450, {}, AsyncCallSucceedEvent);
_.dispatch = function dispatch_8(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'AsyncCallSucceedEvent', 307);
function $doRevealPlace(this$static, request, updateBrowserUrl){
  var requestEvent;
  requestEvent = new PlaceRequestInternalEvent(request, updateBrowserUrl);
  $doFire(this$static.eventBus, requestEvent, this$static);
  if (requestEvent.handled) {
    if (!requestEvent.authorized) {
      $unlock(this$static);
      $illegalAccess(this$static, $toPlaceToken(dynamicCast($get_1(this$static.placeHierarchy, 0), 44)));
    }
  }
   else {
    $unlock(this$static);
    $error(this$static, $toPlaceToken(dynamicCast($get_1(this$static.placeHierarchy, 0), 44)));
  }
}

function $error(this$static){
  $startError(this$static);
  $revealPlace(this$static, this$static.errorPlaceRequest, false);
  this$static.internalError = false;
}

function $fireEvent_2(this$static, event_0){
  $doFire(this$static.eventBus, event_0, this$static);
}

function $getCurrentPlaceRequest(this$static){
  return this$static.placeHierarchy.array.length > 0?dynamicCast($get_1(this$static.placeHierarchy, this$static.placeHierarchy.array.length - 1), 44):$build(new PlaceRequest$Builder);
}

function $getLock(this$static){
  if (this$static.locked) {
    return false;
  }
  $lock(this$static);
  return true;
}

function $handleTokenChange(this$static, historyToken){
  if (this$static.locked) {
    this$static.defferedNavigation = new PlaceManagerImpl$1(this$static, historyToken);
    return;
  }
  if (!$getLock(this$static)) {
    return;
  }
  if ($equals_0($trim(historyToken), '')) {
    $unlock(this$static);
    $revealPlace(this$static, this$static.defaultPlaceRequest, false);
  }
   else {
    this$static.placeHierarchy = $toPlaceRequestHierarchy(this$static.tokenFormatter, historyToken);
    $doRevealPlace(this$static, this$static.placeHierarchy.array.length > 0?dynamicCast($get_1(this$static.placeHierarchy, this$static.placeHierarchy.array.length - 1), 44):$build(new PlaceRequest$Builder), true);
  }
}

function $illegalAccess(this$static){
  $startError(this$static);
  $revealPlace(this$static, this$static.unauthorizedPlaceRequest, false);
  this$static.internalError = false;
}

function $lock(this$static){
  if (!this$static.locked) {
    this$static.locked = true;
    $fireEvent_2(this$static, new LockInteractionEvent(true));
  }
}

function $revealPlace(this$static, request, updateBrowserUrl){
  if (this$static.locked) {
    this$static.defferedNavigation = new PlaceManagerImpl$2(this$static, request, updateBrowserUrl);
    return;
  }
  if (!$getLock(this$static)) {
    return;
  }
  this$static.placeHierarchy.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
  $add_3(this$static.placeHierarchy, request);
  $doRevealPlace(this$static, request, updateBrowserUrl);
}

function $startError(this$static){
  if (this$static.internalError) {
    throw new RuntimeException_0('Encountered repeated errors resulting in an infinite loop. Make sure all users have access to the pages revealed by revealErrorPlace and revealUnauthorizedPlace. (Note that the default implementations call revealDefaultPlace)');
  }
  this$static.internalError = true;
}

function $unlock(this$static){
  var navigation;
  if (this$static.locked) {
    this$static.locked = false;
    $fireEvent_2(this$static, new LockInteractionEvent(false));
    if (this$static.defferedNavigation) {
      navigation = this$static.defferedNavigation;
      this$static.defferedNavigation = null;
      navigation.execute_1();
    }
  }
}

function $updateHistory(this$static, request, updateBrowserUrl){
  var browserHistoryToken, historyToken;
  $set_0(this$static.placeHierarchy, this$static.placeHierarchy.array.length - 1, request);
  if (updateBrowserUrl) {
    historyToken = $toPlaceToken(dynamicCast($get_1(this$static.placeHierarchy, 0), 44));
    browserHistoryToken = ($clinit_History() , $clinit_History() , token_0);
    (browserHistoryToken == null || !$equals_0(browserHistoryToken, historyToken)) && newItem(historyToken);
  }
}

defineClass(227, 1, $intern_27);
_.internalError = false;
_.locked = false;
var Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'PlaceManagerImpl', 227);
function DefaultPlaceManager(eventBus, tokenFormatter, defaultPlaceNameToken, errorPlaceNameToken, unauthorizedPlaceNameToken){
  this.placeHierarchy = new ArrayList;
  this.eventBus = eventBus;
  this.tokenFormatter = tokenFormatter;
  $clinit_History();
  $addValueChangeHandler(historyEventSource, this);
  this.defaultPlaceRequest = $build($nameToken(new PlaceRequest$Builder, defaultPlaceNameToken));
  this.errorPlaceRequest = $build($nameToken(new PlaceRequest$Builder, errorPlaceNameToken));
  this.unauthorizedPlaceRequest = $build($nameToken(new PlaceRequest$Builder, unauthorizedPlaceNameToken));
}

defineClass(228, 227, $intern_27, DefaultPlaceManager);
var Lcom_gwtplatform_mvp_client_proxy_DefaultPlaceManager_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'DefaultPlaceManager', 228);
var TYPE_9;
function $dispatch_0(this$static, handler){
  this$static.lock?$lockScreen(dynamicCast(handler.view, 56)):$unlockScreen(dynamicCast(handler.view, 56));
}

function LockInteractionEvent(lock){
  this.lock = lock;
}

defineClass(131, 450, {}, LockInteractionEvent);
_.dispatch = function dispatch_9(handler){
  $dispatch_0(this, dynamicCast(handler, 470));
}
;
_.getAssociatedType = function getAssociatedType_10(){
  return !TYPE_10 && (TYPE_10 = new GwtEvent$Type) , TYPE_10;
}
;
_.lock = false;
var TYPE_10;
var Lcom_gwtplatform_mvp_client_proxy_LockInteractionEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'LockInteractionEvent', 131);
function $clinit_NavigationEvent(){
  $clinit_NavigationEvent = emptyMethod;
  TYPE_11 = new GwtEvent$Type;
}

function NavigationEvent(){
  $clinit_NavigationEvent();
}

defineClass(255, 450, {}, NavigationEvent);
_.dispatch = function dispatch_10(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_11(){
  return TYPE_11;
}
;
var TYPE_11;
var Lcom_gwtplatform_mvp_client_proxy_NavigationEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'NavigationEvent', 255);
function $checkLoading(this$static){
  if (this$static.state == ($clinit_NotifyingAsyncCallback$State() , INITIALIZED)) {
    ++counter;
    counter == 1 && ($clinit_AsyncCallStartEvent() , this$static.eventBus.fireEvent(new AsyncCallStartEvent));
    this$static.state = LOADING;
  }
}

function NotifyingAsyncCallback(eventBus){
  this.eventBus = eventBus;
  this.state = ($clinit_NotifyingAsyncCallback$State() , UNKNOWN);
}

defineClass(127, 1, {});
_.failure = function failure(caught){
}
;
_.onFailure_0 = function onFailure_2(caught){
  if (this.state == ($clinit_NotifyingAsyncCallback$State() , LOADING)) {
    --counter;
    counter == 0 && ($clinit_AsyncCallFailEvent() , this.eventBus.fireEvent(new AsyncCallFailEvent));
  }
  this.state = FAILED;
  this.failure(caught);
}
;
_.onSuccess = function onSuccess_2(result){
  if (this.state == ($clinit_NotifyingAsyncCallback$State() , LOADING)) {
    --counter;
    counter == 0 && ($clinit_AsyncCallSucceedEvent() , this.eventBus.fireEvent(new AsyncCallSucceedEvent));
  }
  this.state = SUCCEEDED;
  this.success_0(result);
}
;
var counter = 0;
var Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'NotifyingAsyncCallback', 127);
function $clinit_NotifyingAsyncCallback$State(){
  $clinit_NotifyingAsyncCallback$State = emptyMethod;
  UNKNOWN = new NotifyingAsyncCallback$State('UNKNOWN', 0);
  INITIALIZED = new NotifyingAsyncCallback$State('INITIALIZED', 1);
  LOADING = new NotifyingAsyncCallback$State('LOADING', 2);
  SUCCEEDED = new NotifyingAsyncCallback$State('SUCCEEDED', 3);
  FAILED = new NotifyingAsyncCallback$State('FAILED', 4);
}

function NotifyingAsyncCallback$State(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_NotifyingAsyncCallback$State();
  return initValues(getClassLiteralForArray(Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_2_classLit, 1), $intern_4, 52, 0, [UNKNOWN, INITIALIZED, LOADING, SUCCEEDED, FAILED]);
}

defineClass(52, 4, {52:1, 3:1, 6:1, 4:1}, NotifyingAsyncCallback$State);
var FAILED, INITIALIZED, LOADING, SUCCEEDED, UNKNOWN;
var Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_2_classLit = createForEnum('com.gwtplatform.mvp.client.proxy', 'NotifyingAsyncCallback/State', 52, Ljava_lang_Enum_2_classLit, values_10);
function $equals(this$static, o){
  var nameToken, nameToken$array, nameToken$index, nameToken$max, place;
  if (instanceOf(o, 68)) {
    place = dynamicCast(o, 68);
    return equals_14(this$static.nameTokens, place.nameTokens);
  }
  if (instanceOf(o, 76)) {
    place = dynamicCast(o, 76);
    for (nameToken$array = this$static.nameTokens , nameToken$index = 0 , nameToken$max = nameToken$array.length; nameToken$index < nameToken$max; ++nameToken$index) {
      nameToken = nameToken$array[nameToken$index];
      if ($equals_0(nameToken, place.getNameToken())) {
        return true;
      }
    }
    return $equals_0(this$static.nameTokens[0], place.getNameToken());
  }
  return false;
}

function $matchesRequest(this$static, request){
  var nameToken, nameToken$array, nameToken$index, nameToken$max;
  for (nameToken$array = this$static.nameTokens , nameToken$index = 0 , nameToken$max = nameToken$array.length; nameToken$index < nameToken$max; ++nameToken$index) {
    nameToken = nameToken$array[nameToken$index];
    if ($matchesNameToken(request, nameToken)) {
      return true;
    }
  }
  return false;
}

function PlaceImpl(nameTokens){
  this.nameTokens = nameTokens;
}

defineClass(68, 1, {76:1, 68:1}, PlaceImpl);
_.equals$ = function equals_5(o){
  return $equals(this, o);
}
;
_.getNameToken = function getNameToken(){
  return this.nameTokens[0];
}
;
_.hashCode$ = function hashCode_7(){
  return 17 * hashCode_16(this.nameTokens);
}
;
_.toString$ = function toString_11(){
  return this.nameTokens[0];
}
;
var Lcom_gwtplatform_mvp_client_proxy_PlaceImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'PlaceImpl', 68);
function PlaceManagerImpl$1(this$0, val$historyToken){
  this.this$01 = this$0;
  this.val$historyToken2 = val$historyToken;
}

defineClass(229, 1, {}, PlaceManagerImpl$1);
_.execute_1 = function execute_10(){
  $handleTokenChange(this.this$01, this.val$historyToken2);
}
;
var Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'PlaceManagerImpl/1', 229);
function PlaceManagerImpl$2(this$0, val$request, val$updateBrowserUrl){
  this.this$01 = this$0;
  this.val$request2 = val$request;
  this.val$updateBrowserUrl3 = val$updateBrowserUrl;
}

defineClass(230, 1, {}, PlaceManagerImpl$2);
_.execute_1 = function execute_11(){
  $revealPlace(this.this$01, this.val$request2, this.val$updateBrowserUrl3);
}
;
_.val$updateBrowserUrl3 = false;
var Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'PlaceManagerImpl/2', 230);
function $dispatch_1(this$static, handler){
  $onPlaceRequest(handler, this$static);
}

function PlaceRequestInternalEvent(request, updateBrowserHistory){
  this.request = request;
  this.updateBrowserHistory = updateBrowserHistory;
}

defineClass(244, 450, {}, PlaceRequestInternalEvent);
_.dispatch = function dispatch_11(handler){
  $dispatch_1(this, dynamicCast(handler, 472));
}
;
_.getAssociatedType = function getAssociatedType_12(){
  return !TYPE_12 && (TYPE_12 = new GwtEvent$Type) , TYPE_12;
}
;
_.authorized = true;
_.handled = false;
_.updateBrowserHistory = false;
var TYPE_12;
var Lcom_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'PlaceRequestInternalEvent', 244);
function PlaceTokenRegistryImpl(){
}

defineClass(250, 1, {}, PlaceTokenRegistryImpl);
var Lcom_gwtplatform_mvp_client_proxy_PlaceTokenRegistryImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'PlaceTokenRegistryImpl', 250);
function $bind_0(this$static, eventBus){
  this$static.eventBus = eventBus;
}

function $getPresenter(this$static, callback){
  callback.state = ($clinit_NotifyingAsyncCallback$State() , INITIALIZED);
  this$static.presenter.get_2(callback);
  $checkLoading(callback);
}

defineClass(453, 1, $intern_11);
var Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyImpl', 453);
function $addDeferredCommand(command){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), command);
}

function $addRegisteredHandler_0(this$static, type_0, handler){
  var registration;
  registration = this$static.eventBus.addHandler(type_0, handler);
  $registerHandler_0(this$static.handlerContainer, registration);
}

function $bind_1(this$static, placeManager, eventBus){
  this$static.placeManager = placeManager;
  this$static.eventBus = eventBus;
  $addRegisteredHandler_0(this$static, (!TYPE_12 && (TYPE_12 = new GwtEvent$Type) , TYPE_12), new ProxyPlaceAbstract$1(this$static));
  $addRegisteredHandler_0(this$static, (!TYPE_9 && (TYPE_9 = new GwtEvent$Type) , TYPE_9), new ProxyPlaceAbstract$2);
}

function $fireEvent_3(this$static, event_0){
  this$static.eventBus.fireEventFromSource(event_0, this$static);
}

function $handleRequest(this$static, request, updateBrowserUrl){
  $getPresenter(this$static.proxy, new ProxyPlaceAbstract$3(this$static, this$static.eventBus, request, updateBrowserUrl));
}

function $manualReveal(this$static, presenter){
  !!this$static.placeManager.defferedNavigation || (presenter.visible?($clinit_ResetPresentersEvent() , $fireEvent_3(this$static, new ResetPresentersEvent)):$forceReveal(presenter));
  $unlock(this$static.placeManager);
}

function $matchesRequest_0(this$static, request){
  return $matchesRequest(this$static.place, request);
}

function $setPlace(this$static, place){
  this$static.place = place;
}

defineClass(216, 1, $intern_28);
_.equals$ = function equals_6(o){
  return $equals(this.place, o);
}
;
_.getNameToken = function getNameToken_0(){
  return this.place.nameTokens[0];
}
;
_.hashCode$ = function hashCode_8(){
  return 17 * hashCode_16(this.place.nameTokens);
}
;
_.toString$ = function toString_12(){
  return this.place.nameTokens[0];
}
;
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceAbstract', 216);
function $onPlaceRequest(this$static, event_0){
  var request;
  if (event_0.handled) {
    return;
  }
  request = event_0.request;
  if ($matchesRequest_0(this$static.this$01, request)) {
    event_0.handled = true;
    $handleRequest(this$static.this$01, request, event_0.updateBrowserHistory);
  }
}

function ProxyPlaceAbstract$1(this$0){
  this.this$01 = this$0;
}

defineClass(220, 1, {28:1, 472:1}, ProxyPlaceAbstract$1);
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceAbstract/1', 220);
function ProxyPlaceAbstract$2(){
}

defineClass(221, 1, {28:1}, ProxyPlaceAbstract$2);
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$2_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceAbstract/2', 221);
function $success(this$static, presenter){
  $addDeferredCommand(new ProxyPlaceAbstract$3$1(this$static, presenter, this$static.val$request3, this$static.val$updateBrowserUrl4));
}

function ProxyPlaceAbstract$3(this$0, $anonymous0, val$request, val$updateBrowserUrl){
  this.this$01 = this$0;
  this.val$request3 = val$request;
  this.val$updateBrowserUrl4 = val$updateBrowserUrl;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(222, 127, {}, ProxyPlaceAbstract$3);
_.failure = function failure_0(caught){
  $unlock(this.this$01.placeManager);
}
;
_.success_0 = function success(presenter){
  $success(this, dynamicCast(presenter, 43));
}
;
_.val$updateBrowserUrl4 = false;
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceAbstract/3', 222);
function ProxyPlaceAbstract$3$1(this$1, val$presenter, val$request, val$updateBrowserUrl){
  this.this$11 = this$1;
  this.val$presenter2 = val$presenter;
  this.val$request3 = val$request;
  this.val$updateBrowserUrl4 = val$updateBrowserUrl;
}

defineClass(223, 1, {}, ProxyPlaceAbstract$3$1);
_.execute_1 = function execute_12(){
  var originalRequest;
  originalRequest = $getCurrentPlaceRequest(this.this$11.this$01.placeManager);
  this.val$presenter2.prepareFromRequest(this.val$request3);
  originalRequest == $getCurrentPlaceRequest(this.this$11.this$01.placeManager) && $updateHistory(this.this$11.this$01.placeManager, this.val$request3, this.val$updateBrowserUrl4);
  $clinit_NavigationEvent();
  $fireEvent_2(this.this$11.this$01.placeManager, new NavigationEvent);
  $manualReveal(this.this$11.this$01, this.val$presenter2);
}
;
_.val$updateBrowserUrl4 = false;
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceAbstract/3/1', 223);
function $bind_2(this$static){
  if (this$static.wasBound) {
    $bind(this$static);
    $bind_1(this$static.this$01, this$static.this$01.placeManager, this$static.this$01.eventBus);
  }
}

function $registerHandler_0(this$static, handlerRegistration){
  $add_3(this$static.handlerRegistrations, handlerRegistration);
  this$static.wasBound = true;
}

function ProxyPlaceAbstract$ProxyHandlerContainer(this$0){
  this.this$01 = this$0;
  HandlerContainerImpl.call(this);
}

defineClass(219, 91, {}, ProxyPlaceAbstract$ProxyHandlerContainer);
_.bind_0 = function bind_3(){
  $bind_2(this);
}
;
_.wasBound = false;
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceAbstract/ProxyHandlerContainer', 219);
function ProxyPlaceImpl(){
  this.handlerContainer = new ProxyPlaceAbstract$ProxyHandlerContainer(this);
}

defineClass(126, 216, $intern_28);
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceImpl', 126);
function $clinit_ResetPresentersEvent(){
  $clinit_ResetPresentersEvent = emptyMethod;
  type_1 = new GwtEvent$Type;
}

function ResetPresentersEvent(){
  $clinit_ResetPresentersEvent();
}

defineClass(129, 450, {}, ResetPresentersEvent);
_.dispatch = function dispatch_12(handler){
  $onResetPresenters(dynamicCast(handler, 466));
}
;
_.getAssociatedType = function getAssociatedType_13(){
  return type_1;
}
;
var type_1;
var Lcom_gwtplatform_mvp_client_proxy_ResetPresentersEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ResetPresentersEvent', 129);
function $dispatch_2(this$static, handler){
  $getPresenter(handler.proxy, new RevealContentHandler$1(handler.eventBus, this$static));
}

function RevealContentEvent(type_0, content_0){
  this.type_0 = type_0;
  this.content_0 = content_0;
}

defineClass(321, 450, {}, RevealContentEvent);
_.dispatch = function dispatch_13(handler){
  $dispatch_2(this, dynamicCast(handler, 94));
}
;
_.getAssociatedType = function getAssociatedType_14(){
  return this.type_0;
}
;
var Lcom_gwtplatform_mvp_client_proxy_RevealContentEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'RevealContentEvent', 321);
function RevealContentHandler(eventBus, proxy){
  this.eventBus = eventBus;
  this.proxy = proxy;
}

defineClass(94, 1, {28:1, 94:1}, RevealContentHandler);
var Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'RevealContentHandler', 94);
function $success_0(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new RevealContentHandler$1$1(presenter, this$static.val$revealContentEvent3));
}

function RevealContentHandler$1($anonymous0, val$revealContentEvent){
  this.val$revealContentEvent3 = val$revealContentEvent;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(245, 127, {}, RevealContentHandler$1);
_.success_0 = function success_0(presenter){
  $success_0(this, dynamicCast(presenter, 43));
}
;
var Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'RevealContentHandler/1', 245);
function RevealContentHandler$1$1(val$presenter, val$revealContentEvent){
  this.val$presenter2 = val$presenter;
  this.val$revealContentEvent3 = val$revealContentEvent;
}

defineClass(246, 1, {}, RevealContentHandler$1$1);
_.execute_1 = function execute_13(){
  $forceReveal(this.val$presenter2);
  $setInSlot(this.val$presenter2, this.val$revealContentEvent3.type_0, this.val$revealContentEvent3.content_0);
}
;
var Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'RevealContentHandler/1/1', 246);
function $clinit_RevealRootContentEvent(){
  $clinit_RevealRootContentEvent = emptyMethod;
  TYPE_13 = new GwtEvent$Type;
}

function $dispatch_3(this$static, handler){
  $setUsingRootLayoutPanel(dynamicCast(handler.view, 56), false);
  $setInSlot(handler, ($clinit_RootPresenter() , rootSlot), this$static.content_0);
}

function RevealRootContentEvent(content_0){
  $clinit_RevealRootContentEvent();
  this.content_0 = content_0;
}

defineClass(130, 450, {}, RevealRootContentEvent);
_.dispatch = function dispatch_14(handler){
  $dispatch_3(this, dynamicCast(handler, 467));
}
;
_.getAssociatedType = function getAssociatedType_15(){
  return TYPE_13;
}
;
var TYPE_13;
var Lcom_gwtplatform_mvp_client_proxy_RevealRootContentEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'RevealRootContentEvent', 130);
function $clinit_RevealRootLayoutContentEvent(){
  $clinit_RevealRootLayoutContentEvent = emptyMethod;
  TYPE_14 = new GwtEvent$Type;
}

function $dispatch_4(this$static, handler){
  $setUsingRootLayoutPanel(dynamicCast(handler.view, 56), true);
  $setInSlot(handler, ($clinit_RootPresenter() , rootSlot), this$static.content_0);
}

function RevealRootLayoutContentEvent(content_0){
  $clinit_RevealRootLayoutContentEvent();
  this.content_0 = content_0;
}

defineClass(251, 450, {}, RevealRootLayoutContentEvent);
_.dispatch = function dispatch_15(handler){
  $dispatch_4(this, dynamicCast(handler, 468));
}
;
_.getAssociatedType = function getAssociatedType_16(){
  return TYPE_14;
}
;
var TYPE_14;
var Lcom_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'RevealRootLayoutContentEvent', 251);
function $clinit_RevealRootPopupContentEvent(){
  $clinit_RevealRootPopupContentEvent = emptyMethod;
  TYPE_15 = new GwtEvent$Type;
}

function $dispatch_5(this$static, handler){
  $addToPopupSlot(handler, this$static.content_0);
}

function RevealRootPopupContentEvent(content_0){
  $clinit_RevealRootPopupContentEvent();
  this.content_0 = content_0;
}

defineClass(252, 450, {}, RevealRootPopupContentEvent);
_.dispatch = function dispatch_16(handler){
  $dispatch_5(this, dynamicCast(handler, 469));
}
;
_.getAssociatedType = function getAssociatedType_17(){
  return TYPE_15;
}
;
var TYPE_15;
var Lcom_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'RevealRootPopupContentEvent', 252);
function $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$) {
    result = new DefaultPlaceManager($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_annotation$$none$$($getFragment_com_gwtplatform_mvp_shared_proxy(this$static.injector)), $get_Key$type$java$lang$String$_annotation$$com$gwtplatform$mvp$client$annotations$DefaultPlace$($getFragment_com_gwtplatform_mvp_client(this$static.injector)), $get_Key$type$java$lang$String$_annotation$$com$gwtplatform$mvp$client$annotations$ErrorPlace$($getFragment_com_gwtplatform_mvp_client(this$static.injector)), $get_Key$type$java$lang$String$_annotation$$com$gwtplatform$mvp$client$annotations$UnauthorizedPlace$($getFragment_com_gwtplatform_mvp_client(this$static.injector)), $get_Key$type$com$google$gwt$place$shared$PlaceHistoryHandler$Historian$_annotation$$none$$($getFragment_com_google_gwt_place_shared(this$static.injector)));
    this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_11(injector){
  this.injector = injector;
}

defineClass(202, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_11);
_.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$ = null;
var Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 202);
function $getParameter(this$static, key, defaultValue){
  var value_0;
  value_0 = null;
  !!this$static.params && (value_0 = dynamicCastToString($get_3(this$static.params, key)));
  value_0 == null && (value_0 = defaultValue);
  return value_0;
}

function $matchesNameToken(this$static, nameToken){
  if (this$static.nameToken == null || nameToken == null) {
    return false;
  }
  return $equals_0(this$static.nameToken, nameToken);
}

function PlaceRequest(nameToken, params){
  this.nameToken = nameToken;
  this.params = params;
}

defineClass(44, 1, {44:1}, PlaceRequest);
_.equals$ = function equals_7(obj){
  var req;
  if (instanceOf(obj, 44)) {
    req = dynamicCast(obj, 44);
    if (this.nameToken == null || req.nameToken == null) {
      return false;
    }
    if (!$equals_0(this.nameToken, req.nameToken)) {
      return false;
    }
    return !this.params?!req.params:$equals_1(this.params, req.params);
  }
  return false;
}
;
_.hashCode$ = function hashCode_9(){
  if (this.nameToken == null) {
    throw new RuntimeException_0('Cannot compute hashcode of PlaceRequest with a null nameToken');
  }
  return 11 * (getHashCode_0(this.nameToken) + (!this.params?0:hashCode_17(new LinkedHashMap$EntrySet(this.params))));
}
;
_.toString$ = function toString_13(){
  return 'PlaceRequest(nameToken=' + this.nameToken + ', params=' + this.params + ')';
}
;
var Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2_classLit = createForClass('com.gwtplatform.mvp.shared.proxy', 'PlaceRequest', 44);
function $build(this$static){
  return new PlaceRequest(this$static.nameToken, this$static.params);
}

function $nameToken(this$static, nameToken){
  this$static.nameToken = nameToken;
  return this$static;
}

function $with_0(this$static, params){
  if (params) {
    !this$static.params && (this$static.params = new LinkedHashMap);
    $putAll(this$static.params, params);
  }
  return this$static;
}

function PlaceRequest$Builder(){
}

defineClass(47, 1, {}, PlaceRequest$Builder);
var Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2_classLit = createForClass('com.gwtplatform.mvp.shared.proxy', 'PlaceRequest/Builder', 47);
function $decodeEmbeddedParams(parameters){
  var entry, entry$iterator;
  if (parameters) {
    for (entry$iterator = parameters.entrySet().iterator(); entry$iterator.hasNext();) {
      entry = dynamicCast(entry$iterator.next_0(), 14);
      entry.setValue($decodeQueryString(dynamicCastToString(entry.getValue())));
    }
  }
  return parameters;
}

function $parseQueryString(queryString, into){
  var keyValue, keyValuePair, keyValuePair$array, keyValuePair$index, keyValuePair$max, result;
  result = into?into:new HashMap;
  if (queryString != null && !!queryString.length) {
    for (keyValuePair$array = $split(queryString, '&', 0) , keyValuePair$index = 0 , keyValuePair$max = keyValuePair$array.length; keyValuePair$index < keyValuePair$max; ++keyValuePair$index) {
      keyValuePair = keyValuePair$array[keyValuePair$index];
      keyValue = $split(keyValuePair, '=', 2);
      keyValue.length > 1?result.put(keyValue[0], $decodeQueryString(keyValue[1])):result.put(keyValue[0], '');
    }
  }
  return result;
}

function $toPlaceRequest(this$static, placeToken){
  var match_0, matcher, place, query, split_0;
  if (!($equals_0(placeToken.substr(0, 1), '/') || $equals_0(placeToken.substr(0, 2), '!/'))) {
    return $toPlaceRequest(this$static, '/' + placeToken);
  }
  split_0 = placeToken.indexOf('?');
  place = split_0 != -1?placeToken.substr(0, split_0):placeToken;
  query = split_0 != -1?__substr(placeToken, split_0 + 1, placeToken.length - (split_0 + 1)):'';
  matcher = new RouteTokenFormatter$RouteMatcher(place);
  match_0 = matcher.allMatches.map_0.size_0 == 0?new RouteTokenFormatter$RouteMatch(place, 0, null):dynamicCast(getKeyOrNSE($getLastEntry(matcher.allMatches.map_0)), 58);
  match_0.parameters = $decodeEmbeddedParams(match_0.parameters);
  match_0.parameters = $parseQueryString(query, match_0.parameters);
  return $build($with_0($nameToken(new PlaceRequest$Builder, match_0.route), match_0.parameters));
}

function $toPlaceRequestHierarchy(this$static, historyToken){
  var result;
  result = new ArrayList;
  $add_3(result, $toPlaceRequest(this$static, historyToken));
  return result;
}

function $toPlaceToken(placeRequest){
  var encodedParameterValue, parameterName, parameterName$iterator, parameterValue, placeToken, querySeparator, queryString, queryStringBuilder, regexp, regex, replacement;
  placeToken = placeRequest.nameToken;
  queryStringBuilder = new StringBuilder;
  querySeparator = '';
  for (parameterName$iterator = (placeRequest.params?new AbstractMap$1(placeRequest.params):($clinit_Collections() , $clinit_Collections() , EMPTY_SET)).iterator(); parameterName$iterator.hasNext();) {
    parameterName = dynamicCastToString(parameterName$iterator.next_0());
    parameterValue = $getParameter(placeRequest, parameterName, null);
    if (parameterValue != null) {
      encodedParameterValue = (throwIfNull('decodedURLComponent', parameterValue) , regexp = /%20/g , encodeURIComponent(parameterValue).replace(regexp, '+'));
      if (placeToken.indexOf('/{' + parameterName + '}') != -1) {
        placeToken = (regex = $replaceAll('{' + parameterName + '}', '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1') , replacement = $replaceAll($replaceAll(encodedParameterValue, '\\\\', '\\\\\\\\'), '\\$', '\\\\$') , $replaceAll(placeToken, regex, replacement));
      }
       else {
        $append_0($append_0($append_0((queryStringBuilder.string += querySeparator , queryStringBuilder), parameterName), '='), encodedParameterValue);
        querySeparator = '&';
      }
    }
  }
  queryString = queryStringBuilder.string;
  !queryString.length || (placeToken = placeToken + '?' + queryString);
  return placeToken;
}

function RouteTokenFormatter(){
}

defineClass(242, 1, {}, RouteTokenFormatter);
var Lcom_gwtplatform_mvp_shared_proxy_RouteTokenFormatter_2_classLit = createForClass('com.gwtplatform.mvp.shared.proxy', 'RouteTokenFormatter', 242);
function $compareTo_0(this$static, other){
  return $compareTo_2(valueOf(this$static.staticMatches), valueOf(other.staticMatches));
}

function RouteTokenFormatter$RouteMatch(route, staticMatches, parameters){
  this.route = route;
  this.staticMatches = staticMatches;
  this.parameters = parameters;
}

defineClass(58, 1, {58:1, 6:1}, RouteTokenFormatter$RouteMatch);
_.compareTo = function compareTo_0(other){
  return $compareTo_0(this, dynamicCast(other, 58));
}
;
_.staticMatches = 0;
var Lcom_gwtplatform_mvp_shared_proxy_RouteTokenFormatter$RouteMatch_2_classLit = createForClass('com.gwtplatform.mvp.shared.proxy', 'RouteTokenFormatter/RouteMatch', 58);
function $matchRoute(this$static, route){
  var i, parameterName, recordedParameters, routeParts, staticMatches;
  routeParts = $split(route, '/', 0);
  if (this$static.placeParts.length != routeParts.length) {
    return null;
  }
  if (this$static.placeParts.length == 0) {
    return new RouteTokenFormatter$RouteMatch(route, 0, null);
  }
  recordedParameters = new HashMap;
  staticMatches = 0;
  for (i = 0; i < this$static.placeParts.length; i++) {
    if ($equals_0(this$static.placeParts[i], routeParts[i])) {
      ++staticMatches;
    }
     else if ((new RegExp('^(\\{.*\\})$')).test(routeParts[i])) {
      parameterName = __substr(routeParts[i], 1, routeParts[i].length - 1 - 1);
      recordedParameters.put(parameterName, this$static.placeParts[i]);
    }
     else {
      return null;
    }
  }
  return new RouteTokenFormatter$RouteMatch(route, staticMatches, recordedParameters);
}

function RouteTokenFormatter$RouteMatcher(placeToken){
  var match_0, route, route$iterator, placeTokens;
  this.allMatches = new TreeSet;
  this.placeParts = $split(placeToken, '/', 0);
  for (route$iterator = $iterator(new AbstractMap$1((placeTokens = new HashSet , $add_7(placeTokens, '/login') , $add_7(placeTokens, '/home') , placeTokens).map_0)); route$iterator.val$outerIter2.hasNext();) {
    route = dynamicCastToString($next_0(route$iterator));
    match_0 = $matchRoute(this, route);
    !!match_0 && $add_8(this.allMatches, match_0);
  }
}

defineClass(243, 1, {}, RouteTokenFormatter$RouteMatcher);
var Lcom_gwtplatform_mvp_shared_proxy_RouteTokenFormatter$RouteMatcher_2_classLit = createForClass('com.gwtplatform.mvp.shared.proxy', 'RouteTokenFormatter/RouteMatcher', 243);
function $get_Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_annotation$$none$$) {
    result = new RouteTokenFormatter(($get_Key$type$com$gwtplatform$common$shared$UrlUtils$_annotation$$none$$($getFragment_com_gwtplatform_common_shared(this$static.injector)) , new PlaceTokenRegistryImpl));
    this$static.singleton_Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_annotation$$none$$;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_12(injector){
  this.injector = injector;
}

defineClass(207, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_12);
_.singleton_Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_annotation$$none$$ = null;
var Lcom_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.mvp.shared.proxy', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 207);
function LoginAction(username, password){
  this.username = username;
  this.password = password;
}

defineClass(359, 460, {3:1}, LoginAction);
var Lcom_vypersw_finances_client_actions_LoginAction_2_classLit = createForClass('com.vypersw.finances.client.actions', 'LoginAction', 359);
function serialize_23(streamWriter, instance){
  $writeString(streamWriter, instance.password);
  $writeString(streamWriter, instance.username);
}

var Lcom_vypersw_finances_client_actions_LogoutAction_2_classLit = createForClass('com.vypersw.finances.client.actions', 'LogoutAction', 360);
function serialize_24(streamWriter, instance){
}

function $clinit_ApplicationPresenter(){
  $clinit_ApplicationPresenter = emptyMethod;
  $clinit_PresenterWidget();
  SLOT_content = new GwtEvent$Type;
}

var SLOT_content;
function ApplicationPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_3(delayedBindObjects, this);
}

defineClass(217, 126, $intern_29, ApplicationPresenterMyProxyImpl);
_.delayedBind = function delayedBind(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector)));
  wrappedProxy = new ApplicationPresenterMyProxyImpl$WrappedProxy;
  $delayedBind(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['/home']);
  $setPlace(this, new PlaceImpl(nameToken));
}
;
var Lcom_vypersw_finances_client_application_ApplicationPresenterMyProxyImpl_2_classLit = createForClass('com.vypersw.finances.client.application', 'ApplicationPresenterMyProxyImpl', 217);
function $delayedBind(this$static, baseGinjector){
  var revealContentHandler;
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$vypersw$finances$client$application$ApplicationPresenter$$_annotation$$none$$($getFragment_com_vypersw_finances_client_application(this$static.ginjector.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector)));
  revealContentHandler = new RevealContentHandler(this$static.eventBus, this$static);
  $doAdd(this$static.eventBus, ($clinit_ApplicationPresenter() , SLOT_content), revealContentHandler);
}

function ApplicationPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(218, 453, $intern_30, ApplicationPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_0(baseGinjector){
  $delayedBind(this, baseGinjector);
}
;
var Lcom_vypersw_finances_client_application_ApplicationPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.vypersw.finances.client.application', 'ApplicationPresenterMyProxyImpl/WrappedProxy', 218);
function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$vypersw$finances$client$application$ApplicationPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment$1(this$static);
  return result;
}

function $get_Key$type$com$vypersw$finances$client$application$ApplicationPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$vypersw$finances$client$application$ApplicationPresenter$MyProxy$_annotation$$none$$) {
    created = new ApplicationPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$vypersw$finances$client$application$ApplicationPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$vypersw$finances$client$application$ApplicationPresenter$MyProxy$_annotation$$none$$;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_13(injector){
  this.injector = injector;
}

defineClass(123, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_13);
_.singleton_Key$type$com$vypersw$finances$client$application$ApplicationPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$vypersw$finances$client$application$ApplicationPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$vypersw$finances$client$application$ApplicationView$_annotation$$none$$ = null;
var Lcom_vypersw_finances_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.vypersw.finances.client.application', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 123);
function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment$1(this$0){
  this.this$01 = this$0;
}

defineClass(189, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment$1);
var Lcom_vypersw_finances_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_2_classLit = createForClass('com.vypersw.finances.client.application', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment/1', 189);
function $onFailure_1(this$static, ex){
  this$static.val$callback2.onFailure_0(ex);
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment$1$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(190, 1, {108:1}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment$1$1);
var Lcom_vypersw_finances_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1$1_2_classLit = createForClass('com.vypersw.finances.client.application', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment/1/1', 190);
function $login(this$static, username, password){
  var action;
  action = new LoginAction(username, password);
  $execute_0(this$static.dispatchAsync, action, this$static.loginCallback);
}

function LoginPresenter(eventBus, view, proxy, dispatchAsync){
  $clinit_PresenterWidget();
  Presenter.call(this, eventBus, view, proxy, ($clinit_Presenter$RevealType() , Root));
  this.loginCallback = new LoginPresenter$1(this);
  dynamicCast(this.view, 107).setUiHandlers(this);
  this.dispatchAsync = dispatchAsync;
}

defineClass(200, 43, {12:1, 15:1, 43:1, 29:1, 153:1}, LoginPresenter);
_.onReset = function onReset_1(){
  $updateFeedback(dynamicCast(this.view, 107), this.feedbackText, this.feedbackType);
  this.feedbackText = null;
  this.feedbackType = null;
}
;
_.prepareFromRequest = function prepareFromRequest_0(request){
  this.feedbackText = $getParameter(request, 'feedbackText', '');
  this.feedbackType = $getParameter(request, 'feedbackType', '');
}
;
_.feedbackText = '';
var Lcom_vypersw_finances_client_login_LoginPresenter_2_classLit = createForClass('com.vypersw.finances.client.login', 'LoginPresenter', 200);
function $onSuccess_3(this$static, result){
  var request;
  if (result.success) {
    request = $build($nameToken(new PlaceRequest$Builder, '/home'));
    $revealPlace(this$static.this$01.placeManager, request, true);
  }
   else {
    $updateFeedback(dynamicCast(this$static.this$01.view, 107), 'Invalid username or password', 'error');
    $clearInputs(dynamicCast(this$static.this$01.view, 107));
  }
}

function LoginPresenter$1(this$0){
  this.this$01 = this$0;
}

defineClass(201, 1, {}, LoginPresenter$1);
_.onFailure_0 = function onFailure_4(caught){
  alert_0(caught.getMessage());
}
;
_.onSuccess = function onSuccess_5(result){
  $onSuccess_3(this, dynamicCast(result, 98));
}
;
var Lcom_vypersw_finances_client_login_LoginPresenter$1_2_classLit = createForClass('com.vypersw.finances.client.login', 'LoginPresenter/1', 201);
function LoginPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_3(delayedBindObjects, this);
}

defineClass(224, 126, $intern_29, LoginPresenterMyProxyImpl);
_.delayedBind = function delayedBind_1(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector)));
  wrappedProxy = new LoginPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_0(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['/login']);
  $setPlace(this, new PlaceImpl(nameToken));
}
;
var Lcom_vypersw_finances_client_login_LoginPresenterMyProxyImpl_2_classLit = createForClass('com.vypersw.finances.client.login', 'LoginPresenterMyProxyImpl', 224);
function $delayedBind_0(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector))));
  this$static.presenter = new StandardProvider($get_Key$type$com$google$inject$Provider$com$vypersw$finances$client$login$LoginPresenter$$_annotation$$none$$($getFragment_com_vypersw_finances_client_login(this$static.ginjector.fieldcom_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector)));
}

function LoginPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(225, 453, $intern_30, LoginPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_2(baseGinjector){
  $delayedBind_0(this, baseGinjector);
}
;
var Lcom_vypersw_finances_client_login_LoginPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.vypersw.finances.client.login', 'LoginPresenterMyProxyImpl/WrappedProxy', 225);
function $clearInputs(this$static){
  $setText_0(this$static.username);
  $setText_0(this$static.password);
}

function $handlePasswordKey(this$static, e){
  $eventGetKeyCode(e.nativeEvent) == 13 && $login(dynamicCast(this$static.uiHandlers, 153), $getText(this$static.username), $getText(this$static.password));
}

function $handleUsernameKey(this$static, e){
  $eventGetKeyCode(e.nativeEvent) == 13 && $login(dynamicCast(this$static.uiHandlers, 153), $getText(this$static.username), $getText(this$static.password));
}

function $login_0(this$static){
  $login(dynamicCast(this$static.uiHandlers, 153), $getPropertyString($getElement(this$static.username), 'value'), $getPropertyString($getElement(this$static.password), 'value'));
}

function $updateFeedback(this$static, text_0, type_0){
  $setText(this$static.feedbackLabel, text_0);
  if ($equalsIgnoreCase(type_0, 'success')) {
    $setStyleName_0(this$static.feedbackLabel, 'success', true);
    $setStyleName_0(this$static.feedbackLabel, 'error', false);
  }
   else {
    $setStyleName_0(this$static.feedbackLabel, 'success', false);
    $setStyleName(this$static.feedbackLabel);
  }
}

function LoginView(){
  $clinit_ViewWithUiHandlers();
  $initWidget(this, $build_f_HTMLPanel1(new LoginView_BinderImpl$Widgets(this)));
  $addDomHandler(this.submit, new LoginView$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  ($clinit_DOM() , this.username.element)['placeholder'] = 'Username...';
  this.password.element['placeholder'] = 'Password...';
}

defineClass(239, 454, {15:1, 107:1}, LoginView);
var Lcom_vypersw_finances_client_login_LoginView_2_classLit = createForClass('com.vypersw.finances.client.login', 'LoginView', 239);
function LoginView$1(this$0){
  this.this$01 = this$0;
}

defineClass(240, 1, $intern_31, LoginView$1);
_.onClick = function onClick_2(event_0){
  $login_0(this.this$01);
}
;
var Lcom_vypersw_finances_client_login_LoginView$1_2_classLit = createForClass('com.vypersw.finances.client.login', 'LoginView/1', 240);
function LoginView_BinderImpl(){
}

defineClass(310, 1, {}, LoginView_BinderImpl);
var Lcom_vypersw_finances_client_login_LoginView_1BinderImpl_2_classLit = createForClass('com.vypersw.finances.client.login', 'LoginView_BinderImpl', 310);
function $build_f_HTMLPanel1(this$static){
  var __attachRecord__, f_HTMLPanel1, feedbackLabel, username, password, submit, sb;
  f_HTMLPanel1 = new HTMLPanel($html2_0(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3).html);
  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  $get_0(this$static.domId0Element);
  $get_0(this$static.domId1Element);
  $get_0(this$static.domId2Element);
  $get_0(this$static.domId3Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement_0(f_HTMLPanel1, (feedbackLabel = new Label , $setClassName(feedbackLabel.element, 'login-feedback-label') , this$static.owner.feedbackLabel = feedbackLabel , feedbackLabel), $get_0(this$static.domId0Element));
  $addAndReplaceElement_0(f_HTMLPanel1, (username = new TextBox , $setClassName(username.element, 'login-user-input') , $addDomHandler(username, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_KeyPressEvent() , $clinit_KeyPressEvent() , TYPE_0)) , this$static.owner.username = username , username), $get_0(this$static.domId1Element));
  $addAndReplaceElement_0(f_HTMLPanel1, (password = new PasswordTextBox , $setClassName(password.element, 'login-user-input') , $addDomHandler(password, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_0)) , this$static.owner.password = password , password), $get_0(this$static.domId2Element));
  $addAndReplaceElement_0(f_HTMLPanel1, (submit = new Button , $setHTML(submit, (sb = new StringBuilder , sb.string += 'Go' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , this$static.owner.submit = submit , submit), $get_0(this$static.domId3Element));
  return f_HTMLPanel1;
}

function LoginView_BinderImpl$Widgets(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new LoginView_BinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new LoginView_BinderImpl$Widgets$2(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId2 = $createUniqueId($doc);
  this.domId3 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement(this.domId0);
  this.domId1Element = new LazyDomElement(this.domId1);
  this.domId2Element = new LazyDomElement(this.domId2);
  this.domId3Element = new LazyDomElement(this.domId3);
}

defineClass(311, 1, {}, LoginView_BinderImpl$Widgets);
var Lcom_vypersw_finances_client_login_LoginView_1BinderImpl$Widgets_2_classLit = createForClass('com.vypersw.finances.client.login', 'LoginView_BinderImpl/Widgets', 311);
function LoginView_BinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(312, 1, $intern_32, LoginView_BinderImpl$Widgets$1);
_.onKeyPress = function onKeyPress(event_0){
  $handleUsernameKey(this.this$11.owner, event_0);
}
;
var Lcom_vypersw_finances_client_login_LoginView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.vypersw.finances.client.login', 'LoginView_BinderImpl/Widgets/1', 312);
function LoginView_BinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(313, 1, $intern_32, LoginView_BinderImpl$Widgets$2);
_.onKeyPress = function onKeyPress_0(event_0){
  $handlePasswordKey(this.this$11.owner, event_0);
}
;
var Lcom_vypersw_finances_client_login_LoginView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.vypersw.finances.client.login', 'LoginView_BinderImpl/Widgets/2', 313);
function $html2_0(arg0, arg1, arg2, arg3){
  var sb;
  sb = new StringBuilder;
  sb.string += "<div class='login-container'> <div class='login-feedback'> <span id='";
  $append_0(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <\/div> <div class='login-form'> <div class='login-input'> <div class='user-input-username login-form-padded'> <span id='";
  $append_0(sb, htmlEscape(arg1));
  sb.string += "'><\/span> <\/div> <div class='user-input-password login-form-padded'> <span id='";
  $append_0(sb, htmlEscape(arg2));
  sb.string += "'><\/span> <\/div> <\/div> <div class='login-submit'> <span id='";
  $append_0(sb, htmlEscape(arg3));
  sb.string += "'><\/span> <\/div> <\/div> <\/div>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $com$vypersw$finances$client$login$LoginPresenter_placeManager_fieldInjection(injectee, value_0){
  injectee.placeManager = value_0;
}

function $get_Key$type$com$google$inject$Provider$com$vypersw$finances$client$login$LoginPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment$1_0(this$static);
  return result;
}

function $get_Key$type$com$vypersw$finances$client$login$LoginPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$vypersw$finances$client$login$LoginPresenter$MyProxy$_annotation$$none$$) {
    created = new LoginPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$vypersw$finances$client$login$LoginPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$vypersw$finances$client$login$LoginPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$vypersw$finances$client$login$LoginPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$vypersw$finances$client$login$LoginPresenter$_annotation$$none$$) {
    result = new LoginPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$vypersw$finances$client$login$LoginView$_annotation$$none$$(this$static), $get_Key$type$com$vypersw$finances$client$login$LoginPresenter$MyProxy$_annotation$$none$$(this$static), $get_Key$type$com$gwtplatform$dispatch$rpc$shared$DispatchAsync$_annotation$$none$$($getFragment_com_gwtplatform_dispatch_rpc_shared(this$static.injector)));
    $com$vypersw$finances$client$login$LoginPresenter_placeManager_fieldInjection(result, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.injector)));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$vypersw$finances$client$login$LoginPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$vypersw$finances$client$login$LoginPresenter$_annotation$$none$$;
}

function $get_Key$type$com$vypersw$finances$client$login$LoginView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$vypersw$finances$client$login$LoginView$_annotation$$none$$) {
    result = new LoginView(new LoginView_BinderImpl);
    this$static.singleton_Key$type$com$vypersw$finances$client$login$LoginView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$vypersw$finances$client$login$LoginView$_annotation$$none$$;
}

function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_14(injector){
  this.injector = injector;
}

defineClass(124, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_14);
_.singleton_Key$type$com$vypersw$finances$client$login$LoginPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$vypersw$finances$client$login$LoginPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$vypersw$finances$client$login$LoginView$_annotation$$none$$ = null;
var Lcom_vypersw_finances_client_login_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('com.vypersw.finances.client.login', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 124);
function com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment$1_0(this$0){
  this.this$01 = this$0;
}

defineClass(191, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment$1_0);
var Lcom_vypersw_finances_client_login_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_2_classLit = createForClass('com.vypersw.finances.client.login', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment/1', 191);
function LoginActionResult(){
  SimpleResult.call(this);
}

defineClass(98, 140, {54:1, 98:1, 3:1}, LoginActionResult);
_.success = false;
var Lcom_vypersw_finances_client_results_LoginActionResult_2_classLit = createForClass('com.vypersw.finances.client.results', 'LoginActionResult', 98);
function deserialize_24(streamReader, instance){
  setSuccess(instance, !!streamReader.results[--streamReader.index_0]);
  setValue(instance, $readObject(streamReader));
}

function instantiate_23(streamReader){
  return new LoginActionResult;
}

function serialize_25(streamWriter, instance){
  $append(streamWriter, instance.success?'1':'0');
  $writeObject(streamWriter, instance.value_0);
}

function setSuccess(instance, value_0){
  instance.success = value_0;
}

function LogoutActionResult(){
  SimpleResult.call(this);
}

defineClass(99, 140, {54:1, 99:1, 3:1}, LogoutActionResult);
var Lcom_vypersw_finances_client_results_LogoutActionResult_2_classLit = createForClass('com.vypersw.finances.client.results', 'LogoutActionResult', 99);
function deserialize_25(streamReader, instance){
  setValue(instance, $readObject(streamReader));
}

function instantiate_24(streamReader){
  return new LogoutActionResult;
}

function serialize_26(streamWriter, instance){
  $writeObject(streamWriter, instance.value_0);
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(113, 1, {});
_.toString$ = function toString_14(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 113);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(77, 7, $intern_3, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 77);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = new Boolean_0(false);
  TRUE = new Boolean_0(true);
}

function $compareTo_1(this$static, b){
  return compare_1(this$static.value_0, b.value_0);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

function compare_1(x_0, y_0){
  return x_0 == y_0?0:x_0?1:-1;
}

defineClass(50, 1, {3:1, 50:1, 6:1}, Boolean_0);
_.compareTo = function compareTo_1(b){
  return $compareTo_1(this, dynamicCast(b, 50));
}
;
_.equals$ = function equals_8(o){
  return instanceOf(o, 50) && dynamicCast(o, 50).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_10(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_15(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 50);
function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(55, 7, $intern_3, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 55);
defineClass(111, 1, {3:1, 111:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 111);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(65, 7, $intern_3, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 65);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(42, 7, $intern_3, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 42);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(79, 7, $intern_3, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 79);
function $compareTo_2(this$static, b){
  return compare_2(this$static.value_0, b.value_0);
}

function Integer(value_0){
  this.value_0 = value_0;
}

function compare_2(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(40, 111, {3:1, 6:1, 40:1, 111:1}, Integer);
_.compareTo = function compareTo_2(b){
  return $compareTo_2(this, dynamicCast(b, 40));
}
;
_.equals$ = function equals_9(o){
  return instanceOf(o, 40) && dynamicCast(o, 40).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_11(){
  return this.value_0;
}
;
_.toString$ = function toString_17(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 40);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_4, 40, 256, 0, 1);
}

var boxedValues_0;
function max_0(y_0){
  return 5 > y_0?5:y_0;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(33, 7, $intern_3, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 33);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals_0(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_4, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function compareTo_3(thisStr, otherStr){
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  return isJavaString(this$static)?compareTo_3(this$static, dynamicCastToString(other)):this$static.compareTo(other);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(22, 113, {465:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 22);
function identityHashCode(o){
  return o == null?0:isJavaString(o)?getHashCode_0(o):getHashCode(o);
}

function UnsupportedOperationException(message){
  RuntimeException_0.call(this, message);
}

defineClass(89, 7, $intern_3, UnsupportedOperationException);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 89);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_3(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $equals_1(this$static, obj){
  var entry, entry$iterator, otherMap;
  if (obj === this$static) {
    return true;
  }
  if (!instanceOf(obj, 32)) {
    return false;
  }
  otherMap = dynamicCast(obj, 32);
  if (this$static.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 14);
    if (!this$static.containsEntry(entry)) {
      return false;
    }
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet().iterator(); iter.hasNext();) {
    entry = dynamicCast(iter.next_0(), 14);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_2();
      }
      return entry;
    }
  }
  return null;
}

function $putAll(this$static, map_0){
  var e, e$iterator;
  checkNotNull(map_0);
  for (e$iterator = map_0.entrySet().iterator(); e$iterator.hasNext();) {
    e = dynamicCast(e$iterator.next_0(), 14);
    $put_2(this$static, e.getKey(), e.getValue());
  }
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(443, 1, {32:1});
_.containsEntry = function containsEntry(entry){
  return $containsEntry(this, entry);
}
;
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.equals$ = function equals_10(obj){
  return $equals_1(this, obj);
}
;
_.get_3 = function get_7(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode$ = function hashCode_12(){
  return hashCode_17(this.entrySet());
}
;
_.isEmpty = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException('Put not supported on this map');
}
;
_.remove_3 = function remove_8(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size_1 = function size_2(){
  return this.entrySet().size_1();
}
;
_.toString$ = function toString_18(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_0('{');
  comma = false;
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 14);
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_0(sb, $toString_1(this, entry.getKey()));
    sb.string += '=';
    $append_0(sb, $toString_1(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 443);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_2(this$static, key){
  return isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_4(key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_4(key) === undefined);
}

function $put(this$static, key, value_0){
  return isJavaString(key)?key == null?$put_0(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

function AbstractHashMap(){
  $reset(this);
}

defineClass(78, 443, {32:1});
_.clear_0 = function clear_0(){
  $reset(this);
}
;
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_3 = function get_8(key){
  return $get_2(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.remove_3 = function remove_9(key){
  return isJavaString(key)?key == null?$remove_7(this.hashCodeMap, null):this.stringMap.remove_4(key):$remove_7(this.hashCodeMap, key);
}
;
_.size_1 = function size_3(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 78);
defineClass(445, 444, $intern_33);
_.equals$ = function equals_11(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 39)) {
    return false;
  }
  other = dynamicCast(o, 39);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_13(){
  return hashCode_17(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 445);
function $contains(this$static, o){
  if (instanceOf(o, 14)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 14));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(114, 445, $intern_33, AbstractHashMap$EntrySet);
_.contains_0 = function contains_1(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_3(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_0 = function remove_10(entry){
  var key;
  if ($contains(this, entry)) {
    key = dynamicCast(entry, 14).getKey();
    this.this$01.remove_3(key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_4(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 114);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(115, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_0(){
  return $hasNext(this);
}
;
_.next_0 = function next_1(){
  return checkStructuralChange(this.this$01, this) , checkCriticalElement($hasNext(this)) , this.last = this.current , dynamicCast(this.current.next_0(), 14);
}
;
_.remove_2 = function remove_11(){
  checkState(!!this.last);
  checkStructuralChange(this.this$01, this);
  this.last.remove_2();
  this.last = null;
  recordLastKnownStructure(this.this$01, this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 115);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(34, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_1(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_2(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_0(this.last = this.i++);
}
;
_.remove_2 = function remove_12(){
  checkState(this.last != -1);
  this.this$01_0.remove_1(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 34);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(88, 34, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 88);
function $iterator(this$static){
  var outerIter;
  outerIter = this$static.this$01.entrySet().iterator();
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(41, 445, $intern_33, AbstractMap$1);
_.contains_0 = function contains_2(key){
  return this.this$01.containsKey(key);
}
;
_.iterator = function iterator_4(){
  return $iterator(this);
}
;
_.remove_0 = function remove_13(key){
  if (this.this$01.containsKey(key)) {
    this.this$01.remove_3(key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_5(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 41);
function $next_0(this$static){
  var entry;
  entry = dynamicCast(this$static.val$outerIter2.next_0(), 14);
  return entry.getKey();
}

function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(166, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_2(){
  return this.val$outerIter2.hasNext();
}
;
_.next_0 = function next_3(){
  return $next_0(this);
}
;
_.remove_2 = function remove_14(){
  this.val$outerIter2.remove_2();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 166);
function $setValue(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(64, 1, {64:1, 14:1});
_.equals$ = function equals_12(other){
  var entry;
  if (!instanceOf(other, 14)) {
    return false;
  }
  entry = dynamicCast(other, 14);
  return equals_18(this.key, entry.getKey()) && equals_18(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_14(){
  return hashCode_20(this.key) ^ hashCode_20(this.value_0);
}
;
_.setValue = function setValue_1(value_0){
  return $setValue(this, value_0);
}
;
_.toString$ = function toString_19(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 64);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(51, 64, {64:1, 51:1, 14:1}, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 51);
defineClass(447, 1, {14:1});
_.equals$ = function equals_13(other){
  var entry;
  if (!instanceOf(other, 14)) {
    return false;
  }
  entry = dynamicCast(other, 14);
  return equals_18(this.getKey(), entry.getKey()) && equals_18(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_15(){
  return hashCode_20(this.getKey()) ^ hashCode_20(this.getValue());
}
;
_.toString$ = function toString_20(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 447);
function $containsEntry_0(this$static, entry){
  var key, lookupEntry;
  key = entry.getKey();
  lookupEntry = $getEntry_0(this$static, key);
  return !!lookupEntry && equals_18(lookupEntry.value_0, entry.getValue());
}

function getKeyOrNSE(entry){
  if (!entry) {
    throw new NoSuchElementException;
  }
  return entry.key;
}

defineClass(455, 443, {32:1});
_.containsEntry = function containsEntry_0(entry){
  return $containsEntry_0(this, entry);
}
;
_.containsKey = function containsKey_1(k){
  return !!$getEntry_0(this, k);
}
;
_.entrySet = function entrySet_0(){
  return new AbstractNavigableMap$EntrySet(this);
}
;
_.get_3 = function get_9(k){
  return getEntryValueOrNull($getEntry_0(this, k));
}
;
var Ljava_util_AbstractNavigableMap_2_classLit = createForClass('java.util', 'AbstractNavigableMap', 455);
function AbstractNavigableMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(134, 445, $intern_33, AbstractNavigableMap$EntrySet);
_.contains_0 = function contains_3(o){
  return instanceOf(o, 14) && $containsEntry_0(this.this$01, dynamicCast(o, 14));
}
;
_.iterator = function iterator_5(){
  return new TreeMap$EntryIterator(this.this$01);
}
;
_.remove_0 = function remove_15(o){
  var entry;
  if (instanceOf(o, 14)) {
    entry = dynamicCast(o, 14);
    return $removeEntry(this.this$01, entry);
  }
  return false;
}
;
_.size_1 = function size_6(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractNavigableMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractNavigableMap/EntrySet', 134);
function $iterator_0(this$static){
  var entryIterator;
  entryIterator = new TreeMap$EntryIterator((new TreeMap$EntrySet(this$static.map_0)).this$01);
  return new AbstractNavigableMap$NavigableKeySet$1(entryIterator);
}

function AbstractNavigableMap$NavigableKeySet(map_0){
  this.map_0 = map_0;
}

defineClass(262, 445, $intern_33, AbstractNavigableMap$NavigableKeySet);
_.contains_0 = function contains_4(o){
  return !!$getEntry_0(this.map_0, o);
}
;
_.iterator = function iterator_6(){
  return $iterator_0(this);
}
;
_.remove_0 = function remove_16(o){
  if ($getEntry_0(this.map_0, o)) {
    $remove_11(this.map_0, o);
    return true;
  }
  return false;
}
;
_.size_1 = function size_7(){
  return this.map_0.size_0;
}
;
var Ljava_util_AbstractNavigableMap$NavigableKeySet_2_classLit = createForClass('java.util', 'AbstractNavigableMap/NavigableKeySet', 262);
function AbstractNavigableMap$NavigableKeySet$1(val$entryIterator){
  this.val$entryIterator2 = val$entryIterator;
}

defineClass(263, 1, {}, AbstractNavigableMap$NavigableKeySet$1);
_.hasNext = function hasNext_3(){
  return this.val$entryIterator2.iter.hasNext();
}
;
_.next_0 = function next_4(){
  var entry;
  entry = $next_1(this.val$entryIterator2);
  return entry.getKey();
}
;
_.remove_2 = function remove_17(){
  $remove_12(this.val$entryIterator2);
}
;
var Ljava_util_AbstractNavigableMap$NavigableKeySet$1_2_classLit = createForClass('java.util', 'AbstractNavigableMap/NavigableKeySet/1', 263);
function equals_14(array1, array2){
  var i, val1, val2;
  if (maskUndefined(array1) === maskUndefined(array2)) {
    return true;
  }
  if (array1 == null || array2 == null) {
    return false;
  }
  if (array1.length != array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; ++i) {
    val1 = array1[i];
    val2 = array2[i];
    if (!(val1 == val2 || val1 != null && $equals_0(val1, val2))) {
      return false;
    }
  }
  return true;
}

function hashCode_16(a){
  var e, e$index, e$max, hashCode;
  if (a == null) {
    return 0;
  }
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?getHashCode_0(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
  EMPTY_SET = new Collections$EmptySet;
}

function hashCode_17(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_18(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var EMPTY_LIST, EMPTY_SET;
function Collections$EmptyList(){
}

defineClass(170, 446, {3:1, 17:1}, Collections$EmptyList);
_.contains_0 = function contains_5(object){
  return false;
}
;
_.get_0 = function get_10(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_7(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_8(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 170);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(171, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_4(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_5(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_1(){
  throw new NoSuchElementException;
}
;
_.remove_2 = function remove_18(){
  throw new IllegalStateException;
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 171);
function Collections$EmptySet(){
}

defineClass(172, 445, $intern_34, Collections$EmptySet);
_.contains_0 = function contains_6(object){
  return false;
}
;
_.iterator = function iterator_8(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_9(){
  return 0;
}
;
var Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', 172);
function $compare(o1, o2){
  checkNotNull(o1);
  checkNotNull(o2);
  return compareTo_Ljava_lang_Object__I__devirtual$(dynamicCast(o1, 6), o2);
}

function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function recordLastKnownStructure(host, iterator){
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(192, 7, $intern_3, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 192);
function HashMap(){
  AbstractHashMap.call(this);
}

function HashMap_0(ignored){
  checkCriticalArgument(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument(true, 'Non-positive load factor');
  $reset(this);
}

defineClass(26, 78, $intern_35, HashMap, HashMap_0);
_.equals = function equals_15(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode_1(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 26);
function $add_7(this$static, o){
  var old;
  old = this$static.map_0.put(o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return this$static.map_0.containsKey(o);
}

function $remove_6(this$static, o){
  return this$static.map_0.remove_3(o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(c){
  this.map_0 = new HashMap_0(c.map_0.size_1());
  $addAll(this, c);
}

defineClass(48, 445, $intern_34, HashSet, HashSet_0);
_.contains_0 = function contains_7(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_2(){
  return this.map_0.size_1() == 0;
}
;
_.iterator = function iterator_9(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.remove_0 = function remove_19(o){
  return $remove_6(this, o);
}
;
_.size_1 = function size_10(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_21(){
  return $toString_0(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 48);
function IdentityHashMap(){
  AbstractHashMap.call(this);
}

defineClass(413, 78, $intern_35, IdentityHashMap);
_.equals$ = function equals_16(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 32)) {
    return false;
  }
  otherMap = dynamicCast(obj, 32);
  if (this.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 14);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(isJavaString(otherKey)?$hasStringValue(this, otherKey):!!$getEntry(this.hashCodeMap, otherKey))) {
      return false;
    }
    if (maskUndefined(otherValue) !== maskUndefined(isJavaString(otherKey)?$getStringValue(this, otherKey):getEntryValueOrNull($getEntry(this.hashCodeMap, otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.equals = function equals_17(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2);
}
;
_.getHashCode = function getHashCode_2(key){
  return getHashCode(key);
}
;
_.hashCode$ = function hashCode_19(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next_0(), 14));
    hashCode += identityHashCode(entry.getKey());
    hashCode += identityHashCode(entry.getValue());
  }
  return hashCode;
}
;
var Ljava_util_IdentityHashMap_2_classLit = createForClass('java.util', 'IdentityHashMap', 413);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + this$static.host.getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.host.equals(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_0(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + this$static.host.getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host.equals(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_7(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + this$static.host.getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (this$static.host.equals(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(120, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 120);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_4, 14, 0, 0, 1);
}

defineClass(183, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_5(){
  return $hasNext_0(this);
}
;
_.next_0 = function next_6(){
  return checkCriticalElement($hasNext_0(this)) , this.lastChain = this.chain , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.remove_2 = function remove_20(){
  checkState(!!this.lastEntry);
  $remove_7(this.this$01, this.lastEntry.getKey());
  maskUndefined(this.chain) === maskUndefined(this.lastChain) && this.chain.length != 1 && --this.itemIndex;
  this.lastEntry = null;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastChain = null;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 183);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(181, 120, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_2(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 181);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(182, 9, $intern_21, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove_1 = function remove_21(index_0){
  var removed;
  return removed = dynamicCast($remove_1(this, index_0), 14) , $remove_7(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 182);
function InternalJsMapFactory(){
}

defineClass(178, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 178);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(180, 178, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 180);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(179, 178, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 179);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_1(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_8(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_1(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(90, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_4 = function get_11(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put_0 = function put_1(key, value_0){
  return $put_1(this, key, value_0);
}
;
_.remove_4 = function remove_22(key){
  return $remove_8(this, key);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 90);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(176, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_6(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_7(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.last = this.i++]);
}
;
_.remove_2 = function remove_23(){
  checkState(this.last != -1);
  this.this$01.remove_4(this.val$keys2[this.last]);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 176);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(119, 447, {14:1}, InternalJsStringMap$2);
_.getKey = function getKey_0(){
  return this.val$key2;
}
;
_.getValue = function getValue_0(){
  return this.this$01.get_4(this.val$key2);
}
;
_.setValue = function setValue_2(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 119);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(173, 90, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_2(entry);
    }
  }
  return list.iterator();
}
;
_.get_4 = function get_12(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put_0 = function put_2(key, value_0){
  return $put_1(this, ':' + key, value_0);
}
;
_.remove_4 = function remove_24(key){
  return $remove_8(this, ':' + key);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 173);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(175, 9, $intern_21, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove_1 = function remove_25(index_0){
  var removed;
  return removed = dynamicCast($remove_1(this, index_0), 14) , $remove_8(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 175);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(174, 90, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 174);
function $get_3(this$static, key){
  var entry;
  entry = dynamicCast(this$static.map_0.get_3(key), 53);
  if (entry) {
    $recordAccess(this$static, entry);
    return entry.value_0;
  }
  return null;
}

function $put_2(this$static, key, value_0){
  var newEntry, old, oldValue;
  old = dynamicCast(this$static.map_0.get_3(key), 53);
  if (!old) {
    newEntry = new LinkedHashMap$ChainEntry_0(this$static, key, value_0);
    this$static.map_0.put(key, newEntry);
    $addToEnd(newEntry);
    return null;
  }
   else {
    oldValue = $setValue(old, value_0);
    $recordAccess(this$static, old);
    return oldValue;
  }
}

function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    $remove_10(entry);
    $addToEnd(entry);
  }
}

function $remove_9(this$static, key){
  var entry;
  entry = dynamicCast(this$static.map_0.remove_3(key), 53);
  if (entry) {
    $remove_10(entry);
    return entry.value_0;
  }
  return null;
}

function LinkedHashMap(){
  HashMap.call(this);
  this.head_0 = new LinkedHashMap$ChainEntry(this);
  this.map_0 = new HashMap;
  this.head_0.prev = this.head_0;
  this.head_0.next = this.head_0;
}

defineClass(136, 26, $intern_35, LinkedHashMap);
_.clear_0 = function clear_1(){
  this.map_0.clear_0();
  this.head_0.prev = this.head_0;
  this.head_0.next = this.head_0;
}
;
_.containsKey = function containsKey_2(key){
  return this.map_0.containsKey(key);
}
;
_.entrySet = function entrySet_1(){
  return new LinkedHashMap$EntrySet(this);
}
;
_.get_3 = function get_13(key){
  return $get_3(this, key);
}
;
_.put = function put_3(key, value_0){
  return $put_2(this, key, value_0);
}
;
_.remove_3 = function remove_26(key){
  return $remove_9(this, key);
}
;
_.size_1 = function size_11(){
  return this.map_0.size_1();
}
;
_.accessOrder = false;
var Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', 136);
function $addToEnd(this$static){
  var tail;
  tail = this$static.this$01.head_0.prev;
  this$static.prev = tail;
  this$static.next = this$static.this$01.head_0;
  tail.next = this$static.this$01.head_0.prev = this$static;
}

function $remove_10(this$static){
  this$static.next.prev = this$static.prev;
  this$static.prev.next = this$static.next;
  this$static.next = this$static.prev = null;
}

function LinkedHashMap$ChainEntry(this$0){
  LinkedHashMap$ChainEntry_0.call(this, this$0, null, null);
}

function LinkedHashMap$ChainEntry_0(this$0, key, value_0){
  this.this$01 = this$0;
  AbstractMap$SimpleEntry.call(this, key, value_0);
}

defineClass(53, 51, {64:1, 51:1, 53:1, 14:1}, LinkedHashMap$ChainEntry, LinkedHashMap$ChainEntry_0);
var Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util', 'LinkedHashMap/ChainEntry', 53);
function $contains_1(this$static, o){
  if (instanceOf(o, 14)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 14));
  }
  return false;
}

function LinkedHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(137, 445, $intern_33, LinkedHashMap$EntrySet);
_.contains_0 = function contains_8(o){
  return $contains_1(this, o);
}
;
_.iterator = function iterator_10(){
  return new LinkedHashMap$EntrySet$EntryIterator(this);
}
;
_.remove_0 = function remove_27(entry){
  var key;
  if ($contains_1(this, entry)) {
    key = dynamicCast(entry, 14).getKey();
    $remove_9(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_12(){
  return this.this$01.map_0.size_1();
}
;
var Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet', 137);
function LinkedHashMap$EntrySet$EntryIterator(this$1){
  this.this$11 = this$1;
  this.next = this$1.this$01.head_0.next;
  recordLastKnownStructure(this$1.this$01.map_0, this);
}

defineClass(264, 1, {}, LinkedHashMap$EntrySet$EntryIterator);
_.hasNext = function hasNext_7(){
  return this.next != this.this$11.this$01.head_0;
}
;
_.next_0 = function next_8(){
  return checkStructuralChange(this.this$11.this$01.map_0, this) , checkCriticalElement(this.next != this.this$11.this$01.head_0) , this.last = this.next , this.next = this.next.next , this.last;
}
;
_.remove_2 = function remove_28(){
  checkState(!!this.last);
  checkStructuralChange(this.this$11.this$01.map_0, this);
  $remove_10(this.last);
  this.this$11.this$01.map_0.remove_3(this.last.key);
  recordLastKnownStructure(this.this$11.this$01.map_0, this);
  this.last = null;
}
;
var Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet/EntryIterator', 264);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(57, 7, $intern_3, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 57);
function equals_18(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_20(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $getEntry_0(this$static, key){
  var c, childNum, tree;
  tree = this$static.root;
  while (tree) {
    c = $compare(key, tree.key);
    if (c == 0) {
      return tree;
    }
    childNum = c < 0?0:1;
    tree = tree.child[childNum];
  }
  return null;
}

function $getLastEntry(this$static){
  var nextNode, node;
  if (!this$static.root) {
    return null;
  }
  node = this$static.root;
  while (nextNode = node.child[1]) {
    node = nextNode;
  }
  return node;
}

function $inOrderAdd(this$static, list, type_0, current, fromKey, fromInclusive, toKey, toInclusive){
  var leftNode, rightNode;
  if (!current) {
    return;
  }
  leftNode = current.child[0];
  !!leftNode && $inOrderAdd(this$static, list, type_0, leftNode, fromKey, fromInclusive, toKey, toInclusive);
  $inRange(type_0, current.key, fromKey, fromInclusive, toKey, toInclusive) && list.add_2(current);
  rightNode = current.child[1];
  !!rightNode && $inOrderAdd(this$static, list, type_0, rightNode, fromKey, fromInclusive, toKey, toInclusive);
}

function $inRange(type_0, key, fromKey, fromInclusive, toKey, toInclusive){
  var compare, compare_0;
  if (type_0.fromKeyValid() && (compare = $compare(key, fromKey) , compare < 0 || !fromInclusive && compare == 0)) {
    return false;
  }
  if (type_0.toKeyValid() && (compare_0 = $compare(key, toKey) , compare_0 > 0 || !toInclusive && compare_0 == 0)) {
    return false;
  }
  return true;
}

function $insert_1(this$static, tree, newNode, state){
  var c, childNum;
  if (!tree) {
    return newNode;
  }
   else {
    c = $compare(newNode.key, tree.key);
    if (c == 0) {
      state.value_0 = $setValue(tree, newNode.value_0);
      state.found = true;
      return tree;
    }
    childNum = c < 0?0:1;
    tree.child[childNum] = $insert_1(this$static, tree.child[childNum], newNode, state);
    if ($isRed(tree.child[childNum])) {
      if ($isRed(tree.child[1 - childNum])) {
        tree.isRed = true;
        tree.child[0].isRed = false;
        tree.child[1].isRed = false;
      }
       else {
        $isRed(tree.child[childNum].child[childNum])?(tree = $rotateSingle(tree, 1 - childNum)):$isRed(tree.child[childNum].child[1 - childNum]) && (tree = $rotateDouble(tree, 1 - childNum));
      }
    }
  }
  return tree;
}

function $isRed(node){
  return !!node && node.isRed;
}

function $put_3(this$static, key, value_0){
  var node, state;
  node = new TreeMap$Node(key, value_0);
  state = new TreeMap$State;
  this$static.root = $insert_1(this$static, this$static.root, node, state);
  state.found || ++this$static.size_0;
  this$static.root.isRed = false;
  return state.value_0;
}

function $remove_11(this$static, k){
  var state;
  state = new TreeMap$State;
  $removeWithState(this$static, k, state);
  return state.value_0;
}

function $removeEntry(this$static, entry){
  var state;
  state = new TreeMap$State;
  state.matchValue = true;
  state.value_0 = entry.getValue();
  return $removeWithState(this$static, entry.getKey(), state);
}

function $removeWithState(this$static, key, state){
  var c, dir_0, dir2, found, grandparent, head, last, newNode, node, parent_0, sibling;
  if (!this$static.root) {
    return false;
  }
  found = null;
  parent_0 = null;
  head = new TreeMap$Node(null, null);
  dir_0 = 1;
  head.child[1] = this$static.root;
  node = head;
  while (node.child[dir_0]) {
    last = dir_0;
    grandparent = parent_0;
    parent_0 = node;
    node = node.child[dir_0];
    c = $compare(key, node.key);
    dir_0 = c < 0?0:1;
    c == 0 && (!state.matchValue || equals_18(node.value_0, state.value_0)) && (found = node);
    if (!(!!node && node.isRed) && !$isRed(node.child[dir_0])) {
      if ($isRed(node.child[1 - dir_0])) {
        parent_0 = parent_0.child[last] = $rotateSingle(node, dir_0);
      }
       else if (!$isRed(node.child[1 - dir_0])) {
        sibling = parent_0.child[1 - last];
        if (sibling) {
          if (!$isRed(sibling.child[1 - last]) && !$isRed(sibling.child[last])) {
            parent_0.isRed = false;
            sibling.isRed = true;
            node.isRed = true;
          }
           else {
            dir2 = grandparent.child[1] == parent_0?1:0;
            $isRed(sibling.child[last])?(grandparent.child[dir2] = $rotateDouble(parent_0, last)):$isRed(sibling.child[1 - last]) && (grandparent.child[dir2] = $rotateSingle(parent_0, last));
            node.isRed = grandparent.child[dir2].isRed = true;
            grandparent.child[dir2].child[0].isRed = false;
            grandparent.child[dir2].child[1].isRed = false;
          }
        }
      }
    }
  }
  if (found) {
    state.found = true;
    state.value_0 = found.value_0;
    if (node != found) {
      newNode = new TreeMap$Node(node.key, node.value_0);
      $replaceNode(head, found, newNode);
      parent_0 == found && (parent_0 = newNode);
    }
    parent_0.child[parent_0.child[1] == node?1:0] = node.child[!node.child[0]?1:0];
    --this$static.size_0;
  }
  this$static.root = head.child[1];
  !!this$static.root && (this$static.root.isRed = false);
  return state.found;
}

function $replaceNode(head, node, newNode){
  var direction, parent_0;
  parent_0 = head;
  direction = parent_0.key == null || $compare(node.key, parent_0.key) > 0?1:0;
  while (parent_0.child[direction] != node) {
    parent_0 = parent_0.child[direction];
    direction = $compare(node.key, parent_0.key) > 0?1:0;
  }
  parent_0.child[direction] = newNode;
  newNode.isRed = node.isRed;
  newNode.child[0] = node.child[0];
  newNode.child[1] = node.child[1];
  node.child[0] = null;
  node.child[1] = null;
}

function $rotateDouble(tree, rotateDirection){
  var otherChildDir;
  otherChildDir = 1 - rotateDirection;
  tree.child[otherChildDir] = $rotateSingle(tree.child[otherChildDir], otherChildDir);
  return $rotateSingle(tree, rotateDirection);
}

function $rotateSingle(tree, rotateDirection){
  var otherChildDir, save;
  otherChildDir = 1 - rotateDirection;
  save = tree.child[otherChildDir];
  tree.child[otherChildDir] = save.child[rotateDirection];
  save.child[rotateDirection] = tree;
  tree.isRed = true;
  save.isRed = false;
  return save;
}

function TreeMap(){
  this.root = null;
}

defineClass(133, 455, $intern_35, TreeMap);
_.entrySet = function entrySet_2(){
  return new TreeMap$EntrySet(this);
}
;
_.put = function put_4(key, value_0){
  return $put_3(this, key, value_0);
}
;
_.remove_3 = function remove_29(k){
  return $remove_11(this, k);
}
;
_.size_1 = function size_13(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_TreeMap_2_classLit = createForClass('java.util', 'TreeMap', 133);
function $next_1(this$static){
  return this$static.last = dynamicCast(this$static.iter.next_0(), 14);
}

function $remove_12(this$static){
  this$static.iter.remove_2();
  $removeEntry(this$static.this$01, this$static.last);
  this$static.last = null;
}

function TreeMap$EntryIterator(this$0){
  TreeMap$EntryIterator_0.call(this, this$0, ($clinit_TreeMap$SubMapType() , All));
}

function TreeMap$EntryIterator_0(this$0, type_0){
  var list;
  this.this$01 = this$0;
  list = new ArrayList;
  $inOrderAdd(this$0, list, type_0, this$0.root, null, false, null, false);
  this.iter = new AbstractList$ListIteratorImpl(list, 0);
}

defineClass(95, 1, {}, TreeMap$EntryIterator);
_.hasNext = function hasNext_8(){
  return this.iter.hasNext();
}
;
_.next_0 = function next_9(){
  return $next_1(this);
}
;
_.remove_2 = function remove_30(){
  $remove_12(this);
}
;
var Ljava_util_TreeMap$EntryIterator_2_classLit = createForClass('java.util', 'TreeMap/EntryIterator', 95);
function TreeMap$EntrySet(this$0){
  AbstractNavigableMap$EntrySet.call(this, this$0);
}

defineClass(135, 134, $intern_33, TreeMap$EntrySet);
var Ljava_util_TreeMap$EntrySet_2_classLit = createForClass('java.util', 'TreeMap/EntrySet', 135);
function TreeMap$Node(key, value_0){
  AbstractMap$SimpleEntry.call(this, key, value_0);
  this.child = initDim(Ljava_util_TreeMap$Node_2_classLit, $intern_4, 60, 2, 0, 1);
  this.isRed = true;
}

defineClass(60, 51, {64:1, 51:1, 14:1, 60:1}, TreeMap$Node);
_.isRed = false;
var Ljava_util_TreeMap$Node_2_classLit = createForClass('java.util', 'TreeMap/Node', 60);
function TreeMap$State(){
}

defineClass(96, 1, {}, TreeMap$State);
_.toString$ = function toString_22(){
  return 'State: mv=' + this.matchValue + ' value=' + this.value_0 + ' done=' + this.done + ' found=' + this.found;
}
;
_.done = false;
_.found = false;
_.matchValue = false;
var Ljava_util_TreeMap$State_2_classLit = createForClass('java.util', 'TreeMap/State', 96);
function $clinit_TreeMap$SubMapType(){
  $clinit_TreeMap$SubMapType = emptyMethod;
  All = new TreeMap$SubMapType('All', 0);
  Head = new TreeMap$SubMapType$1;
  Range_0 = new TreeMap$SubMapType$2;
  Tail = new TreeMap$SubMapType$3;
}

function TreeMap$SubMapType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_TreeMap$SubMapType();
  return initValues(getClassLiteralForArray(Ljava_util_TreeMap$SubMapType_2_classLit, 1), $intern_4, 45, 0, [All, Head, Range_0, Tail]);
}

defineClass(45, 4, $intern_36, TreeMap$SubMapType);
_.fromKeyValid = function fromKeyValid(){
  return false;
}
;
_.toKeyValid = function toKeyValid(){
  return false;
}
;
var All, Head, Range_0, Tail;
var Ljava_util_TreeMap$SubMapType_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType', 45, Ljava_lang_Enum_2_classLit, values_12);
function TreeMap$SubMapType$1(){
  TreeMap$SubMapType.call(this, 'Head', 1);
}

defineClass(259, 45, $intern_36, TreeMap$SubMapType$1);
_.toKeyValid = function toKeyValid_0(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$1_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/1', 259, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function TreeMap$SubMapType$2(){
  TreeMap$SubMapType.call(this, 'Range', 2);
}

defineClass(260, 45, $intern_36, TreeMap$SubMapType$2);
_.fromKeyValid = function fromKeyValid_0(){
  return true;
}
;
_.toKeyValid = function toKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$2_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/2', 260, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function TreeMap$SubMapType$3(){
  TreeMap$SubMapType.call(this, 'Tail', 3);
}

defineClass(261, 45, $intern_36, TreeMap$SubMapType$3);
_.fromKeyValid = function fromKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$3_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/3', 261, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function $add_8(this$static, o){
  return $put_3(this$static.map_0, o, ($clinit_Boolean() , FALSE)) == null;
}

function TreeSet(){
  this.map_0 = new TreeMap;
}

defineClass(256, 445, $intern_34, TreeSet);
_.contains_0 = function contains_9(o){
  return !!$getEntry_0(this.map_0, o);
}
;
_.iterator = function iterator_11(){
  return $iterator_0(new AbstractNavigableMap$NavigableKeySet(this.map_0));
}
;
_.remove_0 = function remove_31(o){
  return $remove_11(this.map_0, o) != null;
}
;
_.size_1 = function size_14(){
  return this.map_0.size_0;
}
;
var Ljava_util_TreeSet_2_classLit = createForClass('java.util', 'TreeSet', 256);
var I_classLit = createForPrimitive('int', 'I'), Z_classLit = createForPrimitive('boolean', 'Z'), Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadTerminatedHandler'), Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit = createForInterface('com.google.gwt.core.client', 'RunAsyncCallback'), Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 432), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 434), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 437), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry'), Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'XsrfToken', null), Lcom_gwtplatform_dispatch_rpc_shared_UnsecuredActionImpl_2_classLit = createForClass('com.gwtplatform.dispatch.rpc.shared', 'UnsecuredActionImpl', null), Ljava_lang_Void_2_classLit = createForClass('java.lang', 'Void', null);
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=Finances-0.js

