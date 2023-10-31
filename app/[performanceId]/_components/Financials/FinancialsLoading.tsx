import { Flex, Text, Separator, Table } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FinancialsLoading = () => {
  const columns = [1, 2, 3, 4, 5];
  const rows = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            {columns.map((col: number) => (
              <Table.ColumnHeaderCell key={col}>
                <Skeleton />
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row: any) => {
            const { label, datum, dataPointId } = row;
            return (
              <Table.Row key={dataPointId}>
                {columns.map((index: number) => {
                  return (
                    <Table.Cell key={index}>
                      <Skeleton />
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default FinancialsLoading;
