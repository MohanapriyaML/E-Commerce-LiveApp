import React from "react";
import { BottomFotter, Footerwrapper, Maindiv, TypoPara } from "./Footer.styled";
import UiTypography from "genpixels_ui_components/src/ui-components/typography/UiTypography";


interface FooterItem {
  id: number;
  title: string;
  description?: string;
  main?: string;
  submain?: string;
  sub?: string;
  subtitle?: string;
  text?: string;
  image?: {
    data?: Array<{
      attributes: {
        url: string;
        alternativeText?: string;
      };
    }>;
  };
}

interface FooterComponentProps {
  footerData: FooterItem[];
}

const FooterComponent: React.FC<FooterComponentProps> = ({ footerData }) => {
  console.log("footer", footerData);

  if (!footerData) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  return (
    <div className="body-gap">
      <Footerwrapper>
        {footerData.map((item) => {
          const { image, title, description, main, submain, sub, subtitle, text } = item;

          return (

            <Maindiv key={item.id}>
              {title !== 'Funiro.' ? (
                <UiTypography className='title-text'>{title}</UiTypography>
              ) : null}
              {title === "Funiro." ? (
                image?.data?.[0]?.attributes?.url && (
                  <>
                    <img
                      src={image.data[0].attributes.url}
                      alt={image.data[0].attributes.alternativeText || title}
                    />
                    <div>
                    {description && <UiTypography className='title-text'>{description}</UiTypography>}
                    </div>
                  </>
                )
              ) : (
                <>
                  <ul>
                    {main && <li><UiTypography varient='h4' className='main-text'>{main}</UiTypography></li>}
                    {submain && <li><UiTypography varient='h4' className='main-text'>{submain}</UiTypography></li>}
                    {sub && <li><UiTypography varient='h4' className='main-text'>{sub}</UiTypography></li>}
                    {subtitle && <li><UiTypography varient='h4' className='main-text'>{subtitle}</UiTypography></li>}

                    {text && <li>
                      <input type="text" placeholder="Enter Your Email Address"/>
                      <UiTypography varient='h5' className='button-text'>{text}</UiTypography>
                    </li>}
                  </ul>
                </>
              )}
            </Maindiv>
          );
        })}
      </Footerwrapper>
      <hr />
      <BottomFotter>
        <TypoPara>{currentYear} furino. All rights reverved</TypoPara>
      </BottomFotter>
    </div>
  );
};

export default FooterComponent;
