import { ConfigProvider, Table } from "antd";
import * as colors from "../../variables/themes";

interface TableWrapperProps {
  dataSource: any;
  columns: any;
  tableProps?: any;
  scrollYsize?: number | null;
}

export default function TableWrapper({
  dataSource,
  columns,
  tableProps,
  scrollYsize = 720,
}: TableWrapperProps): JSX.Element {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: colors.bgColor,
          paddingContentVerticalLG: 12,
        },
      }}
    >
      <div className="border-2 rounded-xl overflow-hidden">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          scroll={{ y: scrollYsize }}
          {...tableProps}
        />
      </div>
    </ConfigProvider>
  );
}