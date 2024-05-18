import axios from 'axios';

async function sendUserData() {
  try {
    const response = await axios.post('https://www.example.com {
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

sendUserData();
