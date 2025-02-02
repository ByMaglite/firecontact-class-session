import { Table, Icon } from "semantic-ui-react";
import { useFetch } from "../../utils/functions";

const Contacts = () => {
  const { contactList, isLoading } = useFetch();

  console.log({contactList, isLoading});

  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <Table size="large" className="table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Username</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Phone Number</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Gender</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {isLoading ? (
            <Table.Row>
              <Table.Cell colSpan={5} textAlign="center">
                <p>Loading...</p>
              </Table.Cell>
            </Table.Row>
          ) : contactList?.length === 0 ? (
            <Table.Row>
              <Table.Cell colSpan={5} textAlign="center">
                <p className="nothing-found">Nothing found!</p>
              </Table.Cell>
            </Table.Row>
          ) : (
            contactList?.map((item) => (
              <Table.Row key={item?.id}>
                <Table.Cell>{item.username.toUpperCase()}</Table.Cell>
                <Table.Cell>{item.phoneNumber}</Table.Cell>
                <Table.Cell>{item.gender}</Table.Cell>
                <Table.Cell>
                  <Icon name="delete" />
                </Table.Cell>
                <Table.Cell>
                  <Icon name="edit" />
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Contacts;
