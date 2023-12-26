import { useContext } from "react";
import { PageContext } from "../../store";
import { componentsList } from "../../components";
import { cloneDeep } from "lodash";
import { v4 } from "uuid";
import { Select } from "antd";

export const Config = () => {
  const { currentConfigId, list, setList } = useContext(PageContext);

  const renderConfig = () => {
    if (currentConfigId) {
      const currentComponent = list.find((item) => {
        return item.id === currentConfigId;
      });

      const currentComponentName = currentComponent.name;

      const allProps = componentsList.find((item) => {
        return item.name === currentComponentName;
      }).propsType;

      const currentProp = currentComponent.props;
      const onChange = (value, name) => {
        const copiedList = cloneDeep(list);
        const target = copiedList.find((item) => {
          return item.id === currentConfigId;
        });

        target.props[name] = value;
        setList(copiedList);
      };

      const renderConfigForm = ({
        type,
        value,
        onChange,
        values,
        defaultVaule,
      }) => {
        switch (type) {
          case "input":
            return <input value={value} onChange={(e) => onChange(e)} />;
          case "select":
            return (
              <Select
                style={{ width: "200px" }}
                value={value}
                onSelect={(e) => onChange(e)}
                options={values}
              />
            );

          case "default":
            return <input value={value} onChange={(e) => onChange(e)} />;
        }
      };
      return (
        <div>
          <div>
            {allProps.map((item) => {
              return (
                <div key={`${item.name}-${v4()}`}>
                  <div>{item.label}</div>
                  <div>
                    {/* <input
                      value={currentProp[item.name]}
                      onChange={(e) => onChange(e.target.value, item.name)}
                    /> */}
                    {renderConfigForm({
                      type: item.type,
                      value: currentProp[item.name],
                      onChange: (value) => onChange(value, item.name),
                      values: item.values,
                      defaultVaule: item.default,
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <div>请点击你要配置的组件</div>;
    }
  };

  return (
    <div
      style={{
        width: "200px",
        borderLeft: "1px solid #bdbdbd",
      }}
    >
      <div>配置区</div>
      <div>
        {/* {currentConfigId ? (
          <div>
            <div>当前组件：{}</div>
          </div>
        ) : (
          <div>请点击你要配置的组件</div>
        )*/}
        {renderConfig()}
      </div>
      <div>样式区</div>
      <div>{}</div>
    </div>
  );
};
