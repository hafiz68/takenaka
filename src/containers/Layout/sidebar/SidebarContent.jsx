import React from "react";
import PropTypes from "prop-types";
import SidebarLink from "./SidebarLink";
import SidebarCategory from "./SidebarCategory";

const SidebarContent = ({
  onClick,
  changeToLight,
  changeToDark,
  changeToGray,
  changeToGrayBlack,
  sidebarCollapse,
}) => {
  const hideSidebar = () => {
    onClick();
  };

  return (
    <div className="sidebar__content">
      <ul className="sidebar__block">
        <SidebarLink
          title="Dashboard"
          icon="home"
          route="/main_dashboard"
          onClick={hideSidebar}
        />
        <SidebarLink
          title="User Management"
          route="/tables/users"
          icon="user"
          onClick={hideSidebar}
        />
        <SidebarLink
          title="Role Management"
          icon="store"
          route="/tables/roles"
          onClick={hideSidebar}
          icon="apartment"
        />{" "}
        <SidebarLink
          title="Project Management"
          icon="apartment"
          route="/tables/projects"
          onClick={hideSidebar}
        />
        <SidebarLink
          title="Issues"
          icon="apartment"
          route="/tables/users_issue"
          onClick={hideSidebar}
        />
        <SidebarLink
          title="Log files"
          icon="heart-pulse"
          route="/charts/log_files"
          onClick={hideSidebar}
        />
        <SidebarLink
          title="Archive data"
          icon="smartphone"
          route="/tables/archives"
          onClick={hideSidebar}
        />
        <SidebarLink
          title="Report"
          icon="apartment"
          route="/tables/report"
          onClick={hideSidebar}
        />
        <SidebarLink
          title="Configurator"
          icon="rocket"
          route="/ui/configs"
          onClick={hideSidebar}
        />
        {/* <SidebarLink
          title="Speak Recognition"
          icon="heart-pulse"
          route="/fitness_dashboard"
          onClick={hideSidebar}
        /> */}
        <SidebarCategory
          title="Themes"
          icon="Themes"
          sidebarCollapse={sidebarCollapse}
        >
          <button
            className="sidebar__link"
            type="button"
            onClick={changeToLight}
          >
            <p className="sidebar__link-title">Light Theme</p>
          </button>
          <button
            className="sidebar__link"
            type="button"
            onClick={changeToDark}
          >
            <p className="sidebar__link-title">Dark Theme</p>
          </button>
          <button
            className="sidebar__link"
            type="button"
            onClick={changeToGray}
          >
            <p className="sidebar__link-title">Gray Theme</p>
          </button>
          <button
            className="sidebar__link"
            type="button"
            onClick={changeToGrayBlack}
          >
            <p className="sidebar__link-title">Blue Theme</p>
          </button>
        </SidebarCategory>
        {/* <SidebarLink
          title="Log In"
          route="/log_in"
          icon="user"
          onClick={hideSidebar}
        /> */}
      </ul>
      {/* <ul className="sidebar__block">
        <SidebarCategory title="UI Elements" icon="diamond" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Alerts" route="/ui/alerts" onClick={hideSidebar} />
          <SidebarLink title="Buttons" route="/ui/buttons" onClick={hideSidebar} />
          <SidebarLink title="Carousel" route="/ui/carousel" onClick={hideSidebar} />
          <SidebarLink title="Collapse" route="/ui/configs" onClick={hideSidebar} />
          <SidebarLink title="Grids" route="/ui/grids" onClick={hideSidebar} />
          <SidebarLink title="Modals" route="/ui/modals" onClick={hideSidebar} />
          <SidebarLink title="Notifications" route="/ui/notifications" onClick={hideSidebar} />
          <SidebarLink title="Panels" route="/ui/panels" onClick={hideSidebar} />
          <SidebarLink title="Progress Bars" route="/ui/progress_bars" onClick={hideSidebar} />
          <SidebarLink title="Range Sliders" route="/ui/range_sliders" onClick={hideSidebar} />
          <SidebarLink title="Tabs" route="/ui/tabs" onClick={hideSidebar} />
          <SidebarLink title="Timeline" route="/ui/timeline" onClick={hideSidebar} />
          <SidebarLink title="Tooltips & Popovers" route="/ui/tooltips" onClick={hideSidebar} />
          <SidebarLink title="Typography" route="/ui/typography" onClick={hideSidebar} />
        </SidebarCategory>
        <SidebarLink title="Mail Application" icon="envelope" route="/mail" onClick={hideSidebar} />
        <SidebarLink title="Chat Application" icon="bubble" route="/chat" onClick={hideSidebar} />
        <SidebarLink title="Todo Application" newLink icon="book" route="/todo" onClick={hideSidebar} />
        <SidebarCategory title="Forms" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Basic Form" route="/forms/users" onClick={hideSidebar} />
          <SidebarLink title="Check Form Controls" route="/forms/check_form_controls" onClick={hideSidebar} />
          <SidebarLink title="File Upload" route="/forms/file_upload" onClick={hideSidebar} />
          <SidebarLink title="Floating Labels Form" route="/forms/floating_labels_form" onClick={hideSidebar} />
          <SidebarLink title="Form Dropzone" route="/forms/form_dropzone" onClick={hideSidebar} />
          <SidebarLink title="Form Layouts" route="/forms/form_layouts" onClick={hideSidebar} />
          <SidebarLink title="Form Picker" route="/forms/form_picker" onClick={hideSidebar} />
          <SidebarLink title="Form Validation" route="/forms/form_validation" onClick={hideSidebar} />
          <SidebarLink title="Mask Form" route="/forms/mask_form" onClick={hideSidebar} />
          <SidebarLink title="Material Form" route="/forms/material_form" onClick={hideSidebar} />
          <SidebarLink title="Wizard Form" route="/forms/wizard_form" onClick={hideSidebar} />
        </SidebarCategory>
        <SidebarCategory title="Tables" icon="list" isNew sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Basic tables" route="/tables/projects" onClick={hideSidebar} />
          <SidebarLink title="Data table" newLink route="/tables/users" onClick={hideSidebar} />
          <SidebarLink title="Drag & Drop table" newLink route="/tables/roles" onClick={hideSidebar} />
          <SidebarLink title="Editable table" route="/tables/editable_table" onClick={hideSidebar} />
          <SidebarLink title="Material table" route="/tables/material_table" onClick={hideSidebar} />
          <SidebarLink
            title="Width resizable table"
            newLink
            route="/tables/resizable_table"
            onClick={hideSidebar}
          />
        </SidebarCategory>
        <SidebarCategory title="Charts" icon="chart-bars" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="ChartsJS" route="/charts/charts_js" onClick={hideSidebar} />
          <SidebarLink title="React-vis" route="/charts/react_vis" onClick={hideSidebar} />
          <SidebarLink title="Recharts" route="/charts/log_files" onClick={hideSidebar} />
        </SidebarCategory>
        <SidebarCategory title="Maps" icon="map" isNew sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Google map" route="/maps/google_map" onClick={hideSidebar} />
          <SidebarLink title="Vector map" route="/maps/vector_map" onClick={hideSidebar} />
          <SidebarLink
            title="Map with api request"
            route="/maps/map_with_request"
            newLink
            onClick={hideSidebar}
          />
        </SidebarCategory>
      </ul> */}
      {/* <ul className="sidebar__block">
        <SidebarCategory title="Account" icon="user" isNew sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Email Confirmation" route="/account/email_confirmation" />
          <SidebarLink title="Lock Screen" route="/lock_screen" />
          <SidebarLink title="Log In Photo" route="/log_in_photo" />
          <SidebarLink title="Profile" route="/account/profile" onClick={hideSidebar} />
          <SidebarLink title="Register" route="/register" />
          <SidebarLink title="Register Photo" route="/register_photo" />
          <SidebarLink title="Reset Password" route="/reset_password" newLink />
          <SidebarLink title="Reset Password Photo" route="/reset_password_photo" newLink />
        </SidebarCategory>
        <SidebarCategory title="E-commerce" icon="cart" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Cart" route="/e-commerce/cart" onClick={hideSidebar} />
          <SidebarLink title="Catalog" route="/e-commerce/catalog" onClick={hideSidebar} />
          <SidebarLink title="Orders List" route="/e-commerce/orders_list" onClick={hideSidebar} />
          <SidebarLink title="Payment" route="/e-commerce/payment" onClick={hideSidebar} />
          <SidebarLink title="Product Edit" route="/e-commerce/product_edit" onClick={hideSidebar} />
          <SidebarLink title="Product Page" route="/e-commerce/product_page" onClick={hideSidebar} />
          <SidebarLink title="Products List" route="/e-commerce/products_list" onClick={hideSidebar} />
        </SidebarCategory>
        <SidebarCategory title="Default Pages" icon="file-empty" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="404" route="/404" />
          <SidebarLink title="Calendar" route="/default_pages/calendar" onClick={hideSidebar} />
          <SidebarLink title="FAQs" route="/default_pages/faq" onClick={hideSidebar} />
          <SidebarLink title="Gallery" route="/default_pages/gallery" onClick={hideSidebar} />
          <SidebarLink title="Invoice template" route="/default_pages/invoice_template" onClick={hideSidebar} />
          <SidebarLink title="Pricing Cards" route="/default_pages/pricing_cards" onClick={hideSidebar} />
          <SidebarLink title="Project Summary" route="/default_pages/project_summary" onClick={hideSidebar} />
          <SidebarLink title="Search Results" route="/default_pages/search_results" onClick={hideSidebar} />
          <SidebarLink title="Text Editor" route="/default_pages/text_editor" onClick={hideSidebar} />
        </SidebarCategory>
        <SidebarCategory title="Multilevel Menu " icon="menu" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Second Level Item" />
          <SidebarCategory title="Second Level Item" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Third Level Item" />
            <SidebarLink title="Third Level Item" />
          </SidebarCategory>
        </SidebarCategory>
      </ul> */}
      <ul className="sidebar__block">
        <SidebarLink title="Log Out" icon="exit" route="/log_in" />
      </ul>
      {/* <ul className="sidebar__block">
        <SidebarLink
          title="Documentation"
          icon="text-align-justify"
          route="/documentation/introduction"
          onClick={hideSidebar}
        />
      </ul> */}
    </div>
  );
};

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  changeToGray: PropTypes.func.isRequired,
  changeToGrayBlack: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  sidebarCollapse: PropTypes.bool,
};

SidebarContent.defaultProps = {
  sidebarCollapse: false,
};

export default SidebarContent;
