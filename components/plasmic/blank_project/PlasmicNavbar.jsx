// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xgndtx1wAp1Kt3H67Xxeiq
// Component: lbT57O6QquH
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: aL3vzWiqlgO/component
import { useScreenVariants as useScreenVariantscgDYbzl4SPr0V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CgDYbzl4SPr0V/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: xgndtx1wAp1Kt3H67Xxeiq/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: lbT57O6QquH/css

export const PlasmicNavbar__VariantProps = new Array();

export const PlasmicNavbar__ArgProps = new Array();

function PlasmicNavbar__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscgDYbzl4SPr0V()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={
          hasVariant(globalVariants, "screen", "mobileOnly") ? "79px" : "100px"
        }
        displayMaxHeight={"none"}
        displayMaxWidth={"none"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={
          hasVariant(globalVariants, "screen", "mobileOnly") ? "73px" : "101px"
        }
        src={{
          src: "/plasmic/blank_project/images/indroDpTransparentpng.png",
          fullWidth: 2356,
          fullHeight: 2356,
          aspectRatio: undefined
        }}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Button
          className={classNames("__wab_instance", sty.button__oo2Qg)}
          color={"clear"}
          size={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "minimal"
              : undefined
          }
        >
          {"Contact"}
        </Button>

        <Button
          className={classNames("__wab_instance", sty.button__eusXm)}
          color={"clear"}
          size={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "minimal"
              : undefined
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__jaPoW
            )}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "Projects"
              : "Projects"}
          </div>
        </Button>

        <Button
          className={classNames("__wab_instance", sty.button__bUwpU)}
          color={"clear"}
          size={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "minimal"
              : undefined
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__s0ECs
            )}
          >
            {"Features"}
          </div>
        </Button>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "freeBox"],
  img: ["img"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */