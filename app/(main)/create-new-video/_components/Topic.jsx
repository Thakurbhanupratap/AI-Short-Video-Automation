"use client"

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Loader2Icon, SparklesIcon } from 'lucide-react'
import axios from 'axios'
import { toast } from 'sonner'
import { useAuthContext } from '@/app/provider'
const Suggestions=[
    "Historic Story",
    "Kids Story",
    "Movie Stories",
    "AI Innovations",
    "Space Mysteries",
    "Horror Stories",
    "Mythological Tales",
    "Tech Breakthroughts",
    "True Crime Stories",
    "Fantasy Adventures",
    "Science Experiments",
    "Motivational Stories"
]

function Topic({onHandleInputChange}) {
    const[selectTopic, setSelectedTopic] = useState()
    const[scripts, setScripts]=useState();
    const[loading, setLoading] = useState(false);
    const [selectedScriptIndex, setSelectedScriptIndex] = useState();
    const {user} = useAuthContext();

    const GenerateScript= async () => {
        if(user?.credits <= 0){
            toast('Please add more credits')
            return;
          }

        setLoading(true);
        setSelectedScriptIndex(null);
        try{
            const result = await axios.post('/api/generate-script',{
                topic: selectTopic
            });
            console.log(result.data);
            setScripts(result.data?.scripts);
        }catch(e){
            console.log(e)
        }
        setLoading(false);    
    }
  return (
    <div>
        <h2 className='mb-1'>Project Title</h2>
        <Input placeholder="Enter Project Title" onChange={(event) => onHandleInputChange('title', event?.target.value)} />
        <div className='mt-5'>
            <h2>Video Topic</h2>
            <p className='text-sm text-gray-600'>Select topic for your video</p>

            <Tabs defaultValue="suggestion" className="w-full mt-2">
                <TabsList>
                    <TabsTrigger value="suggestion">Suggestions</TabsTrigger>
                    <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
                </TabsList>
                <TabsContent value="suggestion">
                    <div>
                        {Suggestions.map((suggestion, index) => (
                            <Button variant="outline" key={index} className={`m-1 ${suggestion == selectTopic && '!bg-secondary'}`}
                             onClick={() => {
                                console.log("Selected:", suggestion);
                                setSelectedTopic(suggestion);
                                onHandleInputChange('topic',suggestion)
                              }} >{suggestion}</Button>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="your_topic">
                    <div>
                        <h2>Enter Your own topic</h2>
                        <Textarea 
                            placeholder="Enter Your topic"
                            onChange={(event) => onHandleInputChange('topic', event.target.value)}
                        />
                    </div>
                </TabsContent>
            </Tabs>

            {scripts?.length > 0 &&
                <div className='mt-3'>
                    <h2>Select The Script</h2>
                    <div className='grid grid-cols-2 gap-5 mt-1'> 
                    {scripts?.map((item, index) => (
                        <div key={index} className={`p-3 border rounded-lg cursor-pointer
                        ${selectedScriptIndex == index && 'border-white bg-secondary'}
                        `}
                        onClick={() => {setSelectedScriptIndex(index)
                            onHandleInputChange('script',item?.content)
                        }}
                        >
                            <h2 className='line-clamp-4 text-sm text-gray-300'>{item.content}</h2>
                        </div>    
                    ))}
                </div>
            </div>
            }

        </div>
        {!scripts && <Button className='mt-3' size='sm' disable={loading} onClick={GenerateScript}> {loading?<Loader2Icon className='animate-spin' /> : <SparklesIcon /> }Generate Script </Button>}
    </div>
  )
}

export default Topic
