import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../assets/modules/_adcat-ui.scss";
import DatePicker from "react-date-picker";
import { CSSTransition } from "react-transition-group";

const processByType = (str, type, textCase) => {
  if (type === "number") {
    str = str.replace(/\D/g, "");
  }
  if (type === "text") {
    switch (textCase) {
      case "uppercase":
        str = str.toUpperCase();
        break;
      case "lowercase":
        str = str.toLowerCase();
        break;
      default:
        break;
    }
  }
  return str;
};

export const InputField = ({ ...props }) => {
  var {
    onChange,
    value,
    placeholder,
    label,
    name,
    iconLeft,
    iconRight,
    className,
    type,
    textStyle,
  } = props;
  let testId = props["data-testid"] || null;
  const [inputLabel, setValue] = useState(value || "");
  if (onChange === null || onChange === undefined) {
    onChange = function () {};
  }
  useEffect(() => {
    if (inputLabel !== value) onChange(inputLabel || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputLabel]);
  if (type === "date") {
    return (
      <div className={`_ui-input-wrapper ${className || ""}`}>
        {label && <label>{label}</label>}
        <div className="flex-box">
          <DatePicker
            onChange={(value) => setValue(value)}
            value={value || null}
            clearIcon={null}
            calendarIcon={iconLeft || iconRight}
            className="_ui-date-field"
            format="d/MM/yyyy"
            data-testid={testId}
            showLeadingZeros={false}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`_ui-input-wrapper ${className || ""} ${
          props.disabled ? "disabled" : ""
        }`}
      >
        {label && <label>{label}</label>}
        <div className="flex-box">
          {iconLeft && (
            <span className="_ui-input-icon icon-left">{iconLeft}</span>
          )}

          <input
            type={["text", "password", "email"].includes(type) ? type : "text"}
            value={value || ""}
            data-testid={testId}
            onChange={(event) =>
              setValue(
                processByType(
                  event.target.value,
                  type || "text",
                  textStyle || null
                )
              )
            }
            placeholder={placeholder || ""}
            className="_ui-input-field"
            name={name || label}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            onKeyDown={props.onKeyDown}
            onKeyUp={props.onKeyUp}
            onKeyPress={props.onKeyPress}
            autoComplete="off"
            autoFocus={props.autoFocus}
            disabled={props.disabled || false}
          ></input>
          {iconRight && (
            <span className="_ui-input-icon icon-right">{iconRight}</span>
          )}
        </div>
      </div>
    );
  }
};
const isType = (type, val) =>
  val.constructor.name.toLowerCase() === type.toLowerCase();

export const SelectField = ({ ...props }) => {
  const { onChange, value, label, className, placeholder } = props;
  let testId = props["data-testid"] || null;
  let children = props.children || [];
  if (isType("Object", children)) {
    children = [children];
  }
  children = children.filter((item) => item.type === "option");
  const [inputLabel, setValue] = useState(value || "");
  useEffect(() => {
    if (inputLabel !== value) onChange(inputLabel || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputLabel]);
  return (
    <div className={`_ui-input-wrapper _ui-select-wrapper ${className || ""}`}>
      {label && <label>{label}</label>}
      <select
        onChange={(event) => setValue(event.target.value || "")}
        className="_ui-select-field"
        value={value}
        data-testid={testId}
        placeholder={placeholder || ""}
      >
        {!props.noDefault && <option value={""}>Select</option>}
        {children.map((item, i) => {
          let {
            props: { value, children },
          } = item;
          return (
            <option key={i} value={value}>
              {children}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export const ProgressBar = ({ ...props }) => {
  let {
    value,
    className = null,
    style = {},
    height = 10,
    fillLabel = null,
    label = null,
    fillColor = "#2d9620",
    bgColor = "#e3001b",
  } = props;
  if (isNaN(Number(value))) {
    throw new Error(
      "`value` was expected to get a number but got an invalid value"
    );
  }
  if (isNaN(Number(height))) {
    throw new Error(
      "`height` was expected to get a number but got an invalid value"
    );
  }
  if (style instanceof Object === false) {
    throw new Error(
      "`style` was expected to get an Object but got an invalid value"
    );
  }
  if (Number(value) > 100) {
    throw new Error("`value` cannot be more than 100");
  }

  return (
    <div className="_ui-progress">
      <div
        style={{ ...style, backgroundColor: bgColor, height }}
        className={`_ui-progress-wrapper ${className || ""}`}
      >
        <div
          className="_ui-progess-bar"
          style={{
            background: fillColor,
            height: `${0.6 * height}px`,
            width: `${value * 0.99}%`,
            transition: `width 2s ease-in`,
          }}
        ></div>
      </div>
      {fillLabel && (
        <div
          style={{ width: `${value * 0.99}%` }}
          className="_ui-progress-fillLabel-row"
        >
          {fillLabel}
        </div>
      )}
      {label && <div className="_ui-progress-label-row">{label}</div>}
    </div>
  );
};

export const UiModal = ({ isShowing, hide, ...props }) => {
  let needHeader = !props.noHeader || false;
  const handleClick = (event) => {
    if (event.target.closest(".modal") === null) {
      hide();
    }
  };
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" onClick={hide} />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            id={props.id || null}
            onClick={handleClick}
          >
            <div className="modal">
              {needHeader && (
                <div className="modal-header">
                  <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              )}
              {props.children}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

// export default UiModal;

export const Switch = ({ ...props }) => {
  if (props.name === null || props.name === undefined) {
    throw new Error("`name` is a required field for switch");
  }
  if (props.checked === null || props.checked === undefined) {
    throw new Error("`checked` is a required field for switch");
  }

  const handleChange = (e) => {
    props.onChange(e.target.checked);
  };
  return (
    <div className={`_ui-switch ${props.className || ""}`}>
      <div
        className={`_toggle ${
          props.disabled === true ? "toggle-disabled" : ""
        }`}
      >
        <input
          type="checkbox"
          name={`_toggle_${props.name}`}
          className="_toggle-checkbox"
          id={`${props.name}`}
          checked={props.checked}
          disabled={props.disabled || false}
          onChange={handleChange}
        />
        <label className="_toggle-label" htmlFor={`${props.name}`}>
          {<span className="_toggle-inner"></span>}
          <span className="_toggle-switch"></span>
        </label>
      </div>
    </div>
  );
};

export const Checkbox = ({ ...props }) => {
  let index = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  return (
    <div className={`_ui-switch-cntnr ${props.className || ""}`}>
      <div className="round">
        <input
          type="checkbox"
          id={`checkbox-${index}`}
          onChange={(event) => props.onChange(event.target.checked)}
          checked={props.checked}
        />
        <label htmlFor={`checkbox-${index}`}></label>
      </div>
    </div>
  );
};

export function SlideDrawer({ ...props }) {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <CSSTransition timeout={4000} in={props.show}>
      <div
        className={`_ui-side-drawer ${props.className || ""}`}
        id={props.id || ""}
      >
        <div className={drawerClasses}>{props.children}</div>
        <div className="backdrop" onClick={() => props.handleClose()} />
      </div>
    </CSSTransition>
  );
}

export function AutoComplete({ ...props }) {
  const {
    onChange,
    onKeyUp,
    dataSet,
    onSelect,
    className,
    id,
    name,
    iconLeft,
    iconRight,
    label,
    placeholder,
    value,
    autoFocus,
  } = props;
  return (
    <div className="_ui-auto-complete">
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        {iconLeft && (
          <span className="_ui-input-icon icon-left">{iconLeft}</span>
        )}
        <input
          type="text"
          placeholder={placeholder || ""}
          className={`_ui-ac-input ${className || ""}`}
          id={id || ""}
          name={name || ""}
          onChange={(event) => onChange(event.target.value)}
          onKeyUp={onKeyUp}
          value={value || ""}
          autoFocus={autoFocus}
        />
        {iconRight && dataSet.length > 0 && (
          <span className="_ui-input-icon icon-right">{iconRight}</span>
        )}
      </div>
      {dataSet.length > 0 && (
        <div className="_ui-suggestion-list">
          {dataSet.map((item, i) => (
            <div
              className="_ui-list-item"
              key={i}
              onClick={() => onSelect(item)}
            >
              {props.renderItem(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const Accordion = ({
  title,
  children,
  openIcon,
  collapseIcon,
  className,
  defaultOpen,
  disabled,
}) => {
  const [isOpen, setOpen] = React.useState(defaultOpen || false);
  const [actionDisabled, setDisabled] = React.useState(disabled || false);
  return (
    <div
      className={`_ui-accordion-wrapper ${className || ""} ${
        actionDisabled ? "actionDisabled" : ""
      }`}
    >
      <div
        className={
          openIcon && collapseIcon
            ? `accordian-title-custom ${isOpen ? "open" : ""}`
            : `accordion-title ${isOpen ? "open" : ""}`
        }
        onClick={() => {
          if (!actionDisabled) setOpen(!isOpen);
        }}
      >
        {title}
        {openIcon && collapseIcon && (
          <div className="_collapse-controls">
            {isOpen ? collapseIcon : openIcon}
          </div>
        )}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export const TextBox = ({ ...props }) => {
  let index = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  const { onChange, id, className, value, placeholder, label, name } = props;
  const [inputLabel, setValue] = useState(value || "");
  if (onChange === null || onChange === undefined) {
    onChange = function () {};
  }
  useEffect(() => {
    if (inputLabel !== value) {
      onChange(inputLabel || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputLabel]);
  return (
    <div
      className={`_ui-text-area ${className || ""}`}
      id={id || `_ui-text-area-${index}`}
      name={name || `_ui-text-area-${index}`}
      style={props.wrapperStyles || {}}
    >
      {label && label.length > 0 && (
        <div className="label" style={props.labelStyles || {}}>
          {label}
        </div>
      )}
      <textarea
        placeholder={placeholder || ""}
        value={value || ""}
        onChange={(event) => setValue(event.target.value)}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        onKeyPress={props.onKeyPress}
        autoComplete="off"
        autoFocus={props.autoFocus}
        maxLength={props.maxLength || 10000000}
        rows={props.rows || 3}
        cols={props.cols || 10}
        disabled={props.disabled || false}
        style={props.textAreaStyles || {}}
      ></textarea>
    </div>
  );
};
