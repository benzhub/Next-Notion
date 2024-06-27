import ollama from 'ollama'

interface ChatConfig {
  model: string;
  role: string;
  content: string;
}

export async function invokeLLM(props: ChatConfig): Promise<string | undefined> {
  try {
    const response = await ollama.chat({
      model: props.model,
      messages: [{ role: props.role, content: props.content }],
    });
    // console.log(`${response.message.content}\n`);
    return response.message.content;
  } catch (error) {
    console.log(`Query failed!`);
    console.log(error);
  }
  return undefined; // Add a return statement at the end of the function
}




