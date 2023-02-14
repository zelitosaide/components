import { Column } from "../../core_components/column/Column";
import { DialogOverlay } from "../../core_components/dialog_overlay/DialogOverlay";
import { WarnIcon } from "../../core_components/icons/icons";
import { Input } from "../../core_components/input/Input";
import { Row } from "../../core_components/row/Row";
import { Section } from "../../core_components/section/Section";

export const Modal = ({ visible, setVisible, type, text, title, ...props }) => {
  return (
    <DialogOverlay
      {...props}
      visible={visible}
      setVisible={setVisible}
    >
      <Section
        style={{
          borderRadius: "var(--border-radius-large)",
          background: "#fff",
        }}
      >
        <Row>
          <Column style={{ width: "2rem", height: "2rem" }}>
            <div
              style={{
                width: "2rem",
                height: "2rem",
                background: "rgb(254 226 226)",
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <WarnIcon style={{ width: "1.4rem", color: "rgb(220 38 38)" }} />
            </div>
          </Column>
          <Column style={{ width: "calc(100% - 2rem)" }}>
            <div style={{ paddingLeft: "1rem" }}>
              <h3
                style={{
                  margin: 0,
                  fontWeight: "var(--bold-font-weight)",
                  fontSize: "1rem",
                  color: "var(--bold-font-color)",
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "var(--main-font-color)",
                  fontSize: "var(--main-font-size)",
                }}
              >
                {text}
              </p>

              <Input
                style={{
                  paddingLeft: 0,
                  display: "inline-block",
                  "--bg-color": "rgb(223, 58, 58)",
                  // '--bg-color': 'rgb(220 38 38)',
                  "--bg-hover": "rgb(226, 80, 80)",
                  "--bg-active": "rgb(226, 80, 80)",
                  "--outline-color": "rgb(234, 123, 123)",
                }}
              >
                <button>Deactivate</button>
              </Input>

              <Input
                style={{
                  display: "inline-block",
                  // '--outline-color': 'rgb(35, 197, 32)',
                }}
              >
                <button
                  onClick={() => setVisible(false)}
                  style={{
                    background: "var(--main-white-color)",
                    color: "var(--main-font-color)",
                    border: "1px solid var(--main-border-color)",
                    fontWeight: "var(--bold-font-weight)",
                  }}
                >
                  Cancel
                </button>
              </Input>
            </div>
          </Column>
        </Row>
      </Section>
    </DialogOverlay>
  );
};
