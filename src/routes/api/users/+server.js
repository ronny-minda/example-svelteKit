

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' },
];

export const GET = async () => {
  const jsonData = JSON.stringify(users);
  return new Response(jsonData)
};