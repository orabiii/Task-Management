import { c as create_ssr_component, b as add_attribute, d as compute_rest_props, f as spread, h as escape_attribute_value, i as escape_object, e as escape, j as createEventDispatcher, a as subscribe, s as setContext, g as getContext, k as add_classes, v as validate_component, l as compute_slots, n as each } from "../../chunks/index2.js";
import Dexie, { liveQuery } from "dexie";
import { d as derived, w as writable } from "../../chunks/index.js";
import flatpickr from "flatpickr";
const app = "";
const db = new Dexie("myDatabase");
db.version(1).stores({
  tasks: "++id, category, title ,description, date"
  // Primary key and indexed props
});
const Modal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "dialog.svelte-18f9q7t.svelte-18f9q7t{max-width:400px;border-radius:0.1em;border:none;padding:0}dialog.svelte-18f9q7t.svelte-18f9q7t::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.svelte-18f9q7t>div.svelte-18f9q7t{padding:1em}dialog[open].svelte-18f9q7t.svelte-18f9q7t{animation:svelte-18f9q7t-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-18f9q7t-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-18f9q7t.svelte-18f9q7t::backdrop{animation:svelte-18f9q7t-fade 0.2s ease-out}@keyframes svelte-18f9q7t-fade{from{opacity:0}to{opacity:1}}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  const close = () => {
    dialog.close();
  };
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  $$result.css.add(css$1);
  return `


<dialog class="svelte-18f9q7t"${add_attribute("this", dialog, 0)}><div class="svelte-18f9q7t">${slots.header ? slots.header({}) : ``}
		<hr>
		${slots.default ? slots.default({}) : ``}
		<hr>
		
		</div>

</dialog>`;
});
const WarningFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"></path><path fill="none" d="M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z" data-icon-path="inner-path" opacity="0"></path></svg>`;
});
const WarningAltFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path fill="none" d="M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z" data-icon-path="inner-path"></path><path d="M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"></path><path d="M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"></path></svg>`;
});
let l10n;
function updateClasses(instance) {
  const {
    calendarContainer,
    days,
    daysContainer,
    weekdayContainer,
    selectedDates
  } = instance;
  calendarContainer.classList.add("bx--date-picker__calendar");
  calendarContainer.querySelector(".flatpickr-month").classList.add("bx--date-picker__month");
  weekdayContainer.classList.add("bx--date-picker__weekdays");
  weekdayContainer.querySelectorAll(".flatpickr-weekday").forEach((node) => {
    node.classList.add("bx--date-picker__weekday");
  });
  daysContainer.classList.add("bx--date-picker__days");
  days.querySelectorAll(".flatpickr-day").forEach((node) => {
    node.classList.add("bx--date-picker__day");
    if (node.classList.contains("today") && selectedDates.length > 0) {
      node.classList.add("no-border");
    } else if (node.classList.contains("today") && selectedDates.length === 0) {
      node.classList.remove("no-border");
    }
  });
}
function updateMonthNode(instance) {
  const monthText = instance.l10n.months.longhand[instance.currentMonth];
  const staticMonthNode = instance.monthNav.querySelector(".cur-month");
  if (staticMonthNode) {
    staticMonthNode.textContent = monthText;
  } else {
    const monthSelectNode = instance.monthsDropdownContainer;
    const span = document.createElement("span");
    span.setAttribute("class", "cur-month");
    span.textContent = monthText;
    monthSelectNode.parentNode.replaceChild(span, monthSelectNode);
  }
}
async function createCalendar({ options, base, input, dispatch }) {
  let locale = options.locale;
  if (options.locale === "en" && l10n && l10n.en) {
    l10n.en.weekdays.shorthand.forEach((_, index) => {
      const shorthand = _.slice(0, 2);
      l10n.en.weekdays.shorthand[index] = shorthand === "Th" ? "Th" : shorthand.charAt(0);
    });
    locale = l10n.en;
  }
  let rangePlugin;
  if (options.mode === "range") {
    const importee = await import("flatpickr/dist/esm/plugins/rangePlugin.js");
    rangePlugin = importee.default;
  }
  return new flatpickr(base, {
    allowInput: true,
    disableMobile: true,
    clickOpens: true,
    locale,
    plugins: [
      options.mode === "range" && new rangePlugin({ position: "left", input })
    ].filter(Boolean),
    nextArrow: '<svg width="16px" height="16px" viewBox="0 0 16 16"><polygon points="11,8 6,13 5.3,12.3 9.6,8 5.3,3.7 6,3 "/><rect width="16" height="16" style="fill: none" /></svg>',
    prevArrow: '<svg width="16px" height="16px" viewBox="0 0 16 16"><polygon points="5,8 10,3 10.7,3.7 6.4,8 10.7,12.3 10,13 "/><rect width="16" height="16" style="fill: none" /></svg>',
    onChange: () => {
      dispatch("change");
    },
    onClose: () => {
      dispatch("close");
    },
    onMonthChange: (s, d, instance) => {
      updateMonthNode(instance);
    },
    onOpen: (s, d, instance) => {
      dispatch("open");
      updateClasses(instance);
      updateMonthNode(instance);
    },
    ...options
  });
}
const DatePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "datePickerType",
    "value",
    "valueFrom",
    "valueTo",
    "dateFormat",
    "maxDate",
    "minDate",
    "locale",
    "short",
    "light",
    "id",
    "flatpickrProps"
  ]);
  let $hasCalendar, $$unsubscribe_hasCalendar;
  let $inputValueTo, $$unsubscribe_inputValueTo;
  let $inputValueFrom, $$unsubscribe_inputValueFrom;
  let $inputValue, $$unsubscribe_inputValue;
  let $range, $$unsubscribe_range;
  let $mode, $$unsubscribe_mode;
  let $inputIds, $$unsubscribe_inputIds;
  let $labelTextEmpty, $$unsubscribe_labelTextEmpty;
  let { datePickerType = "simple" } = $$props;
  let { value = "" } = $$props;
  let { valueFrom = "" } = $$props;
  let { valueTo = "" } = $$props;
  let { dateFormat = "m/d/Y" } = $$props;
  let { maxDate = null } = $$props;
  let { minDate = null } = $$props;
  let { locale = "en" } = $$props;
  let { short = false } = $$props;
  let { light = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { flatpickrProps = {} } = $$props;
  const dispatch = createEventDispatcher();
  const inputs = writable([]);
  const inputIds = derived(inputs, (_) => _.map(({ id: id2 }) => id2));
  $$unsubscribe_inputIds = subscribe(inputIds, (value2) => $inputIds = value2);
  const labelTextEmpty = derived(inputs, (_) => _.filter(({ labelText }) => !!labelText).length === 0);
  $$unsubscribe_labelTextEmpty = subscribe(labelTextEmpty, (value2) => $labelTextEmpty = value2);
  const inputValue = writable(value);
  $$unsubscribe_inputValue = subscribe(inputValue, (value2) => $inputValue = value2);
  const inputValueFrom = writable(valueFrom);
  $$unsubscribe_inputValueFrom = subscribe(inputValueFrom, (value2) => $inputValueFrom = value2);
  const inputValueTo = writable(valueTo);
  $$unsubscribe_inputValueTo = subscribe(inputValueTo, (value2) => $inputValueTo = value2);
  const mode = writable(datePickerType);
  $$unsubscribe_mode = subscribe(mode, (value2) => $mode = value2);
  const range = derived(mode, (_) => _ === "range");
  $$unsubscribe_range = subscribe(range, (value2) => $range = value2);
  const hasCalendar = derived(mode, (_) => _ === "single" || _ === "range");
  $$unsubscribe_hasCalendar = subscribe(hasCalendar, (value2) => $hasCalendar = value2);
  let calendar = null;
  let datePickerRef = null;
  let inputRef = null;
  let inputRefTo = null;
  setContext("DatePicker", {
    range,
    inputValue,
    inputValueFrom,
    inputValueTo,
    inputIds,
    hasCalendar,
    add: (data) => {
      inputs.update((_) => [..._, data]);
    },
    declareRef: ({ id: id2, ref }) => {
      if ($inputIds.indexOf(id2) === 0) {
        inputRef = ref;
      } else {
        inputRefTo = ref;
      }
    },
    updateValue: ({ type, value: value2 }) => {
      if (!calendar && type === "input" || type === "change") {
        inputValue.set(value2);
      }
      if (!calendar && type === "change") {
        dispatch("change", value2);
      }
    },
    blurInput: (relatedTarget) => {
      if (calendar && !calendar.calendarContainer.contains(relatedTarget)) {
        calendar.close();
      }
    },
    openCalendar: () => {
      calendar.open();
    },
    focusCalendar: () => {
      (calendar.selectedDateElem || calendar.todayDateElem || calendar.calendarContainer.querySelector(".flatpickr-day[tabindex]") || calendar.calendarContainer).focus();
    }
  });
  async function initCalendar(options) {
    if (calendar) {
      calendar.set("minDate", minDate);
      calendar.set("maxDate", maxDate);
      calendar.set("locale", locale);
      calendar.set("dateFormat", dateFormat);
      Object.entries(flatpickrProps).forEach(([option, value2]) => {
        calendar.set(options, value2);
      });
      return;
    }
    calendar = await createCalendar({
      options: {
        ...options,
        appendTo: datePickerRef,
        defaultDate: $inputValue,
        mode: $mode
      },
      base: inputRef,
      input: inputRefTo,
      dispatch: (event) => {
        const detail = { selectedDates: calendar.selectedDates };
        if ($range) {
          const from = inputRef.value;
          const to = inputRefTo.value;
          detail.dateStr = {
            from: inputRef.value,
            to: inputRefTo.value
          };
          valueFrom = from;
          valueTo = to;
        } else {
          detail.dateStr = inputRef.value;
        }
        return dispatch(event, detail);
      }
    });
  }
  if ($$props.datePickerType === void 0 && $$bindings.datePickerType && datePickerType !== void 0)
    $$bindings.datePickerType(datePickerType);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.valueFrom === void 0 && $$bindings.valueFrom && valueFrom !== void 0)
    $$bindings.valueFrom(valueFrom);
  if ($$props.valueTo === void 0 && $$bindings.valueTo && valueTo !== void 0)
    $$bindings.valueTo(valueTo);
  if ($$props.dateFormat === void 0 && $$bindings.dateFormat && dateFormat !== void 0)
    $$bindings.dateFormat(dateFormat);
  if ($$props.maxDate === void 0 && $$bindings.maxDate && maxDate !== void 0)
    $$bindings.maxDate(maxDate);
  if ($$props.minDate === void 0 && $$bindings.minDate && minDate !== void 0)
    $$bindings.minDate(minDate);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.short === void 0 && $$bindings.short && short !== void 0)
    $$bindings.short(short);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.flatpickrProps === void 0 && $$bindings.flatpickrProps && flatpickrProps !== void 0)
    $$bindings.flatpickrProps(flatpickrProps);
  value = $inputValue;
  {
    inputValue.set(value);
  }
  valueFrom = $inputValueFrom;
  {
    inputValueFrom.set(valueFrom);
  }
  valueTo = $inputValueTo;
  {
    inputValueTo.set(valueTo);
  }
  {
    if ($hasCalendar && inputRef) {
      initCalendar({
        dateFormat,
        locale,
        maxDate,
        minDate,
        ...flatpickrProps
      });
    }
  }
  $$unsubscribe_hasCalendar();
  $$unsubscribe_inputValueTo();
  $$unsubscribe_inputValueFrom();
  $$unsubscribe_inputValue();
  $$unsubscribe_range();
  $$unsubscribe_mode();
  $$unsubscribe_inputIds();
  $$unsubscribe_labelTextEmpty();
  return `


<div${spread([escape_object($$restProps)], { classes: "bx--form-item" })}><div${add_attribute("id", id, 0)} class="${[
    escape(datePickerType && `bx--date-picker--${datePickerType}`, true) + " " + escape(datePickerType === "range" && $labelTextEmpty && "bx--date-picker--nolabel", true),
    "bx--date-picker " + (short ? "bx--date-picker--short" : "") + " " + (light ? "bx--date-picker--light" : "")
  ].join(" ").trim()}"${add_attribute("this", datePickerRef, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>`;
});
const DatePickerInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "type",
    "placeholder",
    "pattern",
    "disabled",
    "helperText",
    "iconDescription",
    "id",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "name",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let $range, $$unsubscribe_range;
  let $inputIds, $$unsubscribe_inputIds;
  let $inputValueFrom, $$unsubscribe_inputValueFrom;
  let $inputValueTo, $$unsubscribe_inputValueTo;
  let $inputValue, $$unsubscribe_inputValue;
  let $hasCalendar, $$unsubscribe_hasCalendar;
  let { size = void 0 } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = "" } = $$props;
  let { pattern = "\\d{1,2}\\/\\d{1,2}\\/\\d{4}" } = $$props;
  let { disabled = false } = $$props;
  let { helperText = "" } = $$props;
  let { iconDescription = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { name = void 0 } = $$props;
  let { ref = null } = $$props;
  const { range, add, hasCalendar, declareRef, inputIds, updateValue, blurInput, openCalendar, focusCalendar, inputValue, inputValueFrom, inputValueTo } = getContext("DatePicker");
  $$unsubscribe_range = subscribe(range, (value) => $range = value);
  $$unsubscribe_hasCalendar = subscribe(hasCalendar, (value) => $hasCalendar = value);
  $$unsubscribe_inputIds = subscribe(inputIds, (value) => $inputIds = value);
  $$unsubscribe_inputValue = subscribe(inputValue, (value) => $inputValue = value);
  $$unsubscribe_inputValueFrom = subscribe(inputValueFrom, (value) => $inputValueFrom = value);
  $$unsubscribe_inputValueTo = subscribe(inputValueTo, (value) => $inputValueTo = value);
  add({ id, labelText });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0)
    $$bindings.pattern(pattern);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ref)
      declareRef({ id, ref });
  }
  $$unsubscribe_range();
  $$unsubscribe_inputIds();
  $$unsubscribe_inputValueFrom();
  $$unsubscribe_inputValueTo();
  $$unsubscribe_inputValue();
  $$unsubscribe_hasCalendar();
  return `<div${add_classes(("bx--date-picker-container " + (!labelText ? "bx--date-picker--nolabel" : "")).trim())}>${labelText || $$slots.labelText ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
        ${escape(labelText)}
      `}</label>` : ``}
  <div${add_classes(("bx--date-picker-input__wrapper " + (invalid ? "bx--date-picker-input__wrapper--invalid" : "") + " " + (warn ? "bx--date-picker-input__wrapper--warn" : "")).trim())}><input${spread(
    [
      {
        "data-invalid": escape_attribute_value(invalid || void 0)
      },
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      { type: escape_attribute_value(type) },
      { pattern: escape_attribute_value(pattern) },
      { disabled: disabled || null },
      escape_object($$restProps),
      {
        value: escape_attribute_value($range ? $inputIds.indexOf(id) === 0 ? $inputValueFrom : $inputValueTo : $inputValue)
      },
      {
        class: escape_attribute_value(size && `bx--date-picker__input--${size}`)
      }
    ],
    {
      classes: "bx--date-picker__input " + (invalid ? "bx--date-picker__input--invalid" : "")
    }
  )}${add_attribute("this", ref, 0)}>
    ${!$hasCalendar ? `${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render(
    $$result,
    {
      class: "bx--date-picker__icon bx--date-picker__icon--invalid"
    },
    {},
    {}
  )}` : ``}
      ${!invalid && warn ? `${validate_component(WarningAltFilled, "WarningAltFilled").$$render(
    $$result,
    {
      class: "bx--date-picker__icon bx--date-picker__icon--warn"
    },
    {},
    {}
  )}` : ``}` : ``}
    ${$hasCalendar ? `${validate_component(Calendar, "Calendar").$$render(
    $$result,
    {
      class: "bx--date-picker__icon",
      "aria-label": iconDescription
    },
    {},
    {}
  )}` : ``}</div>
  ${invalid ? `<div${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}
  ${!invalid && warn ? `<div${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}
  ${helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>`;
});
const HeaderAction_svelte_svelte_type_style_lang = "";
const HeaderActionLink_svelte_svelte_type_style_lang = "";
const HeaderPanelDivider_svelte_svelte_type_style_lang = "";
const HeaderSearch_svelte_svelte_type_style_lang = "";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modal;
  let showModal = false;
  let { category } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { date } = $$props;
  let { id } = $$props;
  let { OldObject = { category, title, description, date } } = $$props;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.OldObject === void 0 && $$bindings.OldObject && OldObject !== void 0)
    $$bindings.OldObject(OldObject);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `


<html><head></head>

<body><div class="flex flex-col justify-center items-center h-[50vh] m-2"><div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-info-100 bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-4 3xl:p-![18px] undefined"><div class="h-full w-full"><div class="relative w-full"><img src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png" class="mb-0 h-10 w-full rounded-xl" alt="">
                    <button class="absolute top-1 right-3 flex items-center justify-center rounded-full bg-red-400 p-2 text-brand-500 hover:cursor-pointer"><div class="flex h-full w-full items-center justify-center rounded-full text-xl hover: bg-red-400"><svg stroke="currentColor" fill="currentColor" stroke-width="0" height="1em" width="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path></svg></div></button>

                    <button class="absolute top-1 left-3 flex items-center justify-center rounded-full bg-green-400 p-2 text-brand-500 hover:cursor-pointer"><div class="flex h-full w-full items-center justify-center rounded-full text-xl hover: bg-green-400"><svg stroke="currentColor" fill="currentColor" stroke-width="0" height="1em" width="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"></path></svg></div></button></div>
                <div class="mb-0 flex flex-col items-center justify-between px-1"><div class="mb-1"><p class="mt-0 text-2xl font-bold text-gray-600 md:mt-1">${escape(category)}</p></div></div>
                <div class="mb-1 flex items-center justify-between px-1 md:items-start"><div class="mb-1"><p class="mt-1 text-2xl font-medium text-gray-600 md:mt-2">${escape(title)}</p></div></div>
                <div class="mb-2 flex items-center justify-between h-[6vh] md:items-start"><div class="mb-2"><p class="mt-1 text-base font-medium text-gray-600 md:mt-2">${escape(description)}</p></div></div>
                <div class="flex items-center justify-between md:items-center lg:justify-between h-[6vh] "><div class="flex"><p class="!mb-0 text-sm font-bold text-brand-500">${escape(date)}</p></div>
                    </div></div></div>
        <div>${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal, this: modal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="relative py-1 px-16 bg-white shadow-md rounded border border-neutral-950"><div class="mb-4 w-full flex justify-start text-green-400"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path></svg>
                        <h1 class="text-gray-800 text-xl font-lg font-bold tracking-normal leading-tight mt-1 ml-2">Edit Task
                        </h1></div>

                    <label for="category" class="mt-2 text-gray-800 text-sm font-bold leading-tight tracking-normal">Category</label>
                    <input id="category" class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"${add_attribute("value", category, 0)}>
                    <label for="title" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Title</label>
                    <input id="title" class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"${add_attribute("value", title, 0)}>
                    <label for="description" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">description</label>
                    <input id="description" class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"${add_attribute("value", description, 0)}>

                    <label for="date" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Date</label>
                    ${validate_component(DatePicker, "DatePicker").$$render(
            $$result,
            {
              datePickerType: "single",
              dateFormat: "d-m-Y",
              value: date
            },
            {
              value: ($$value) => {
                date = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(DatePickerInput, "DatePickerInput").$$render($$result, {}, {}, {})}`;
              }
            }
          )}
                    <div class="flex items-center justify-center w-full mt-1"><button type="submit" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm mr-1">Submit</button>
                        <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 transition duration-150 ease-in-out hover:bg-red-600 bg-red-700 rounded text-white px-8 py-2 text-sm">Cancel</button></div></div>`;
        }
      }
    )}</div></div></body></html>`;
  } while (!$$settled);
  return $$rendered;
});
const AddTask = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal = false;
  let modal;
  let { category = "" } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { date = "" } = $$props;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `



<html><head><link rel="stylesheet" href="https://unpkg.com/carbon-components@10.9.0/css/carbon-components.min.css">
    </head>

<body>
    <div class="flex flex-col items-center h-[10vh] m-4"><button class="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">Create Task !
            <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div></button></div>
    <div>${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal, this: modal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="relative py-1 px-16 bg-white shadow-md rounded border border-neutral-950"><div class="mb-4 w-full flex justify-start text-green-400"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path></svg>
                    <h1 class="text-gray-800 font-lg text-xl font-bold tracking-normal leading-tight mt-1 ml-2">Create Task
                    </h1></div>

                <label for="category" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Category</label>
                <input id="category" class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Required"${add_attribute("value", category, 0)}>
                <label for="title" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Title</label>
                <input id="title" class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Required"${add_attribute("value", title, 0)}>
                <label for="description" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">description</label>
                <input id="description" class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Optional"${add_attribute("value", description, 0)}>

                <label for="date" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Date</label>
                ${validate_component(DatePicker, "DatePicker").$$render(
            $$result,
            {
              datePickerType: "single",
              dateFormat: "d-m-Y",
              value: date
            },
            {
              value: ($$value) => {
                date = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(DatePickerInput, "DatePickerInput").$$render($$result, {}, {}, {})}`;
              }
            }
          )}
                <div class="relative mb-2 mt-2">

                    <div class="flex items-center justify-start w-full"><button class="${"focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out rounded text-white px-8 py-2 text-sm mr-1 " + escape(
            category.length == 0 || title.length == 0 ? "bg-indigo-300 hover:bg-indigo-300" : "bg-indigo-600 hover:bg-indigo-700",
            true
          )}" ${category.length == 0 || title.length == 0 ? "disabled" : ""}>Submit</button>
                        <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 transition duration-150 ease-in-out hover:bg-red-600 bg-red-700 rounded text-white px-8 py-2 text-sm">Cancel</button></div></div></div>`;
        }
      }
    )}</div></body></html>`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:#ffffff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $allTasks, $$unsubscribe_allTasks;
  let allTasks = liveQuery(() => db.tasks.toArray());
  $$unsubscribe_allTasks = subscribe(allTasks, (value) => $allTasks = value);
  $$result.css.add(css);
  $$unsubscribe_allTasks();
  return `<html><head>
    </head>

<body><div>${validate_component(AddTask, "AddTask").$$render($$result, {}, {}, {})}
        <div><div class="bg-white bg-clip-border w-full m-5"><div class="grid grid-flow text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">${$allTasks ? `${each($allTasks, (task) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        category: task.category,
        title: task.title,
        date: task.date,
        id: task.id,
        description: task.description
      },
      {},
      {}
    )}`;
  })}` : ``}</div></div></div></div>
    
    </body></html>`;
});
export {
  Page as default
};
