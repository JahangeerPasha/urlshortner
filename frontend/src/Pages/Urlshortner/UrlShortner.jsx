import { Container, TextInput } from '@mantine/core'
import UrlForm from '../Urlshortner/UrlForm'
import UrlResponse from '../Urlshortner/UrlResponse';
import { useState } from 'react';
export default function UrlShortener() {
  const [ response, setResponse ] = useState(null);
 
   return (
       <Container size={"xs"}>
           {response?<UrlResponse response = {response}/>:<UrlForm setResponse={setResponse}/>}
       </Container>
   )
}
