import { useState } from "react";
import styled from "styled-components";
import { availableLanguages, setSelectedLanguage, lang, getLocale } from "../i18n";
import { Icon } from "./Icon";

const SelectLangs = styled.form`
  position: absolute;
  top: 0;
  right: 30px;
  max-width: 300px;
  height: 42px;
  margin-top: 16px;
  z-index: 1;
`;

const SelectButton = styled.div`
  position: relative;
  padding: 12px 14px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #e2eded;
  border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
`;

const OptionsViewButton = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
  :checked ~ #options #option-bg {
    display: block;
  };
  :not(:checked) ~ #options .option input[type="radio"]:checked ~ .opt-val {
    top: -30px;
  };
  :checked ~ #options .label {
    display: block;
    padding: 12px 14px;
  };
  :checked ~ #options .option .icon {
    display: block;
    padding: 12px 0;
  };
  :checked ~ #options {
    border: 1px solid #e2eded;
    border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
  };
  :checked + #select-button #chevrons .icon {
  color: #2d3667;
  }
`;

const SelectedValue = styled.div`
  font-size: 16px;
  line-height: 1;
  margin-right: 26px;
`;

const Options = styled.div`
  position: absolute;
  top: 42px;
  right: 0;
  left: 0;
  width: 298px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4px;
`;

const StyledOption = styled.div`
  @keyframes moveup {
    0% {
      bottom: -25px;
      opacity: 0;
    }
    100% {
      bottom: 0;
      opacity: 1;
    }
  }

@keyframes movedown {
  0% {
    top: -25px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
  position: relative;
  line-height: 1;
  transition: 0.3s ease all;
  z-index: 2;
  color: #2d3667;
  font-size: 16px;
  input[type="radio"] {
    position: absolute;
    right: 0;
    left: 0;
    width: 100%;
    height: 50%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  };
  .s-c:hover ~ .icon {
    color: #fff;
    opacity: 0;
  }

  .s-c:hover {
    height: 100%;
    z-index: 1;
  }

  .s-c.bottom:hover + .icon {
    bottom: -25px;
    animation: moveup 0.3s ease 0.1s forwards;
  }

  .s-c.top:hover ~ .icon {
    top: -25px;
    animation: movedown 0.3s ease 0.1s forwards;
  }

  .s-c {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
}

.s-c.top {
  top: 0;
}

.s-c.bottom {
  bottom: 0;
}
  .icon {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 14px;
    padding: 0;
    display: none;
  }
  .label {
    color: #2d3667;
    font-size: 16px;
    display: none;
    padding: 0;
    margin-left: 27px;
    transition: 0.3s ease all;
  };
  .opt-val {
    position: absolute;
    left: 14px;
    width: 217px;
    height: 21px;
    opacity: 0;
    background-color: #fff;
    transform: scale(0);
  };
  :nth-child(1) input[type="radio"]:checked ~ .label:before {
    background-color: #000;
    border-radius: 4px 4px 0 0;
  };
  :nth-child(1) input[type="radio"]:checked ~ .opt-val {
    top: -31px;
  };
  :nth-child(2) input[type="radio"]:checked ~ .label:before {
    background-color: #ea4c89;
  };
  :nth-child(2) input[type="radio"]:checked ~ .opt-val {
    top: -71px;
  };
  :nth-child(3) input[type="radio"]:checked ~ .label:before {
    background-color: #0057ff;
  };
  :nth-child(3) input[type="radio"]:checked ~ .opt-val {
    top: -111px;
  };
  :hover .label {
    color: #fff;
  };
  :nth-child(1):hover ~ #option-bg {
    top: 0;
    background-color: #000;
    border-radius: 4px 4px 0 0;
  };
  :nth-child(2):hover ~ #option-bg {
    top: 40px;
    background-color: #ea4c89;
  };
  :nth-child(3):hover ~ #option-bg {
    top: 80px;
    background-color: #0057ff;
  };
  .fa-codepen {
    fill: #000;
  };
  .fa-dribbble {
    fill: #ea4c89;
  };
  .fa-behance {
    fill: #0057ff;
  };
  input[type="radio"]:checked ~ .opt-val {
    opacity: 1;
    transform: scale(1);
  };
  input[type="radio"]:checked ~ i {
    top: 0;
    bottom: auto;
    opacity: 1;
    animation: unset;
  };
  input[type="radio"]:checked ~ i,
  input[type="radio"]:checked ~ .label {
    color: #fff;
  };
  input[type="radio"]:checked ~ .label:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

`;

const OptionBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 40px;
  transition: 0.3s ease all;
  z-index: 1;
  display: none;
`;

export const SelectLanguages = () => {
  const [ selectedValue ] = useState(getLocale(`${lang}_lang`));
  return (
    <SelectLangs>
      <div id="select-box" onChange={setSelectedLanguage}>
        <OptionsViewButton type="checkbox" id="options-view-button"/>          
        <SelectButton>
          <SelectedValue>
            <span>{selectedValue}</span>
          </SelectedValue>
        </SelectButton>
        <Options id="options">
          {availableLanguages.map(({langCode, label, iconClass}) => {
            return (
              <StyledOption className="option" key={langCode}>
                <input className="s-c top" type="radio" name="platform" value={langCode}/>
                <input className="s-c bottom" type="radio" name="platform" value={langCode}/>
                <Icon iconId='projects' iconClass={iconClass}/>
                <span className="label">{label}</span>
                <span className="opt-val">{label}</span>
              </StyledOption>
            )
          })}
          <OptionBg id="option-bg"></OptionBg>
        </Options>
      </div>
    </SelectLangs>
  )
}