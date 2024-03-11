"use client"

import * as z from "zod"
import Heading from '@/components/Heading'
import { MessageSquare } from 'lucide-react'
import React from 'react'
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"

import { useForm } from 'react-hook-form'
import { formSchema } from "./consts"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const ConsversationPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({

        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;
    const onsubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

  return (
    <div>
        <Heading
        title='Conversation'
        description='Our most advanced Conversation'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
        
        />

        <div className='px-4 lg:px-8'>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onsubmit)} 
                    className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                    >
                        <FormField 
                        name="prompt"
                        render={({ field}) => (
                            <FormItem className="col-span-12 lg:col-span-10">
                                <FormControl className="m-0 p-0">
                                    <Input 
                                    className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                    disabled={isLoading}
                                    placeholder="How do I calculate my age."
                                    {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                        
                        
                        />
                        <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>Generate</Button>
                    </form>
                </Form>
            </div>
        </div>
    </div>

  )
}

export default ConsversationPage