const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const GenerateScript = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a two different scripts for 30 seconds video on topic: Kids Story,\n\n-Give me response in JSON format and follow the schema\n-{\nscripts:[\n{\ncontent:\"\n},\n],\n}\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"**Video 1: The Little Seed's Big Dream**\\n\\n*   **(0-5 seconds) Visual:** Close-up shot of a tiny seed in rich soil. Gentle sunlight filters through. Voiceover: \\\"Once upon a time, there was a little seed with a very big dream.\\\"\\n*   **(5-10 seconds) Visual:** Time-lapse showing the seed sprouting a tiny root and a fragile stem. Voiceover: \\\"It dreamed of reaching for the sun, of blooming into a beautiful flower.\\\"\\n*   **(10-20 seconds) Visual:** The plant growing bigger, buffeted by wind and rain. Voiceover: \\\"But the journey wasn't easy. There were storms, and sometimes it felt like the sun had forgotten it.\\\"\\n*   **(20-25 seconds) Visual:** Close-up of a single flower bud forming. Voiceover: \\\"Still, the little seed kept reaching, kept believing...\\\"\\n*   **(25-30 seconds) Visual:** The flower blooms in vibrant color. Upbeat, gentle music swells. Voiceover: \\\"...and finally, its dream came true! What dream will you chase today?\\\"\\n\\n**Sound:** Gentle, hopeful music throughout. Sound effects of rain and wind. Birdsong at the end.\"\n    },\n    {\n      \"content\": \"**Video 2: The Lost Teddy Bear**\\n\\n*   **(0-5 seconds) Visual:** A child playing happily with a teddy bear in a park. Voiceover: \\\"Lily loved her teddy bear, Barnaby, more than anything.\\\"\\n*   **(5-10 seconds) Visual:** Quick cuts showing Lily and Barnaby doing different things - reading, eating, sleeping. Voiceover: \\\"They were best friends, always together on every adventure.\\\"\\n*   **(10-15 seconds) Visual:** Lily wakes up in her bed, looking around frantically. Voiceover: \\\"But one morning, Barnaby was gone!\\\"\\n*   **(15-20 seconds) Visual:** Lily searching frantically in the park, looking under benches and behind trees. Music becomes slightly sad. Voiceover: \\\"Lily searched everywhere, her heart feeling heavy.\\\"\\n*   **(20-25 seconds) Visual:** Close-up on Barnaby sitting alone under a tree, looking forlorn. Voiceover: \\\"Barnaby missed Lily too.\\\"\\n*   **(25-30 seconds) Visual:** Lily spots Barnaby, runs and hugs him tightly. Upbeat, happy music returns. Voiceover: \\\"Finally, they found each other! A reminder that even when we're lost, love can always find its way home.\\\" \\n\\n**Sound:** Happy, playful music in the beginning. Sadder, searching music in the middle. Upbeat, joyful music at the end. Sound effects of park ambience.\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

export const GenerateImageScript = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: `Generate Image Prompts of Cinematic style with all details for each scene for a 30-second video.
              - Follow this JSON schema:
              [
                { imagePrompt: "", sceneContent: "<Script Content>" }
              ]
              - Do not include camera angle descriptions.
              
              `
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "```json\n[\n  {\n    \"imagePrompt\": \"A crowded bus in 1955, passengers seated, with Rosa Parks in focus, calmly looking forward. The atmosphere is tense.\",\n    \"sceneContent\": \"Rosa Parks refused to give up her seat on a bus in 1955.\"\n  },\n  {\n    \"imagePrompt\": \"A group of African Americans standing together, discussing the boycott, determination visible on their faces.\",\n    \"sceneContent\": \"Her quiet act of defiance sparked the Montgomery Bus Boycott.\"\n  },\n  {\n    \"imagePrompt\": \"A historic moment: protestors marching with signs demanding equal rights. Hope and strength in their eyes.\",\n    \"sceneContent\": \"A pivotal moment in the civil rights movement.\"\n  },\n  {\n    \"imagePrompt\": \"A symbolic image of Rosa Parks in a peaceful setting, the words ‘Bravery Inspires Change’ subtly included in the background.\",\n    \"sceneContent\": \"One person's bravery can inspire lasting change for everyone.\"\n  }\n]\n```",
            },
          ],
        },
      ],
    })
