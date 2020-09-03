import React from 'react';
import './App.css';
import zach from './Media/zach.jpg'
import resume from './Media/Resume.pdf'
import Info from './Components/Info.js';
import Navbar from './Components/Navbar.js';
import Project from './Components/Project.js';


import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

function App() {

  return (
    <Segment.Group stacked>
    <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              size='large'
              pointing
              fixed = "top"
            >
              <Container>

                <Menu.Item as='a' position='left'  href='/#about' style={{transform: "translate(-70px, 0px)"}}>About Me</Menu.Item>
                <Menu.Item as='a'position='left' href='/#proj'  style={{transform: "translate(-90px, 0px)"}}>Projects</Menu.Item>
                <Menu.Item as='a'position='left' href='/#research'  style={{transform: "translate(-110px, 0px)"}}>Research</Menu.Item>
                <Menu.Item as='a'position='left' href='/#skills'  style={{transform: "translate(-130px, 0px)"}}>Technical Skills</Menu.Item>
                <Menu.Item position='right'  style={{transform: "translate(110px, 0px)"}}>
                  
                  <Button as='a' 
                    href='https://www.linkedin.com/in/zach-bridwell-6367aa170?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYQyUcyswQESnavfc6%2BslVw%3D%3D'
                    target='_blank'                 
                  >
                    LinkedIn
                  </Button>
                </Menu.Item>
                <Menu.Item position="right"  style={{transform: "translate(90px, 0px)"}}>
                  <Button as='a'
                   href= 'https://github.com/ZachBridwell'
                   target='_blank' 
                  >
                    GitHub
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <Container textAlign='right'>
              <Header
                as='h2'
                content='Zach Bridwell'
                inverted
                style={{
                    fontWeight: 'normal',
                    marginTop: 70,
                    
                }}
                />
                <p>Software Engineer</p>
                <p>zbridwel@gmail.com</p>
            </Container>
            <Container textAlign='left' >
              <div class="ui large centered circular image" style={{transform: "translate(-40px, -120px)"}}>
                <img src={zach}/>
              </div>
            </Container>
            <Container style={{transform: "translate(0px, -30px)"}}>
              <p2> Looking to obtain an entry level Software Engineering position where I can contribute my 
                acquired knowledge and skills towards organizational growth</p2>
            </Container>
            <Button style={{transform: "translate(0px, -10px)"}}as='a' href={resume} target='_blank'>Resume</Button>
          </Segment>
           <Segment style={{ padding: '8em 0em' }} vertical>
           <Container text>
             <Header as='h3' id={'about'}style={{ fontSize: '2em' }}>
               About Me
             </Header>
             <p style={{ fontSize: '1.33em' }}>
               Purdue Universtiy Graduate 2020
             </p>
             <Button as='a' size='large'>
               Read More
             </Button>
     
             <Divider
               as='h4'
               className='header'
               horizontal
               style={{ margin: '3em 0em', textTransform: 'uppercase' }}
             >
             </Divider>
     
             <Header as='h3' style={{ fontSize: '2em' }} id={'proj'}>
               Projects
             </Header>
              <List divided relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header as='a'>Syncopate Chat</List.Header>
                    <List.Description as='a'>6 Person project making a chat application for Purdue students</List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header as='a'>TeamUp</List.Header>
                    <List.Description as='a'>5 Person project providing an easy way for Purdue students to find team members for group projects</List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header as='a'>Fridge2Food</List.Header>
                    <List.Description as='a'>6 Person team project giving users means to find recipes based on certain ingredients </List.Description>
                  </List.Content>
                </List.Item>

              </List>


              <Divider
               as='h4'
               className='header'
               horizontal
               style={{ margin: '3em 0em', textTransform: 'uppercase' }}
             >
             </Divider>


              <Header as='h3' style={{ fontSize: '2em' }} id={'research'}>
               Research
             </Header>
                <List>
                  <List.Item>
                    <List.Content>
                      <List.Header>Operating Systems Research Project</List.Header>
                      <List.Description>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used 
                      in laying out print, graphic or web designs. The passage is attributed
                      to an unknown typesetter in the 15th century who is thought to have 
                      scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
                       type specimen book. It usually begins with:
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>


                <Divider
               as='h4'
               className='header'
               horizontal
               style={{ margin: '3em 0em', textTransform: 'uppercase' }}
             >
             </Divider>

             <Header as='h3' style={{ fontSize: '2em' }} id={'skills'}>
               Technical Skills
             </Header>
             <Container>
               <Grid divided inverted stackable>
               <Grid.Row>
                <Grid.Column width={5}>
                <List bulleted>
                  <List.Item>
                    <b>Languages</b>
                    <List.List>
                      <List.Item>C++ - Advanced</List.Item>
                      <List.Item>React - Advanced</List.Item>
                      <List.Item>Python - Intermediate</List.Item>
                      <List.Item>Java  - Intermediate </List.Item>
                      <List.Item>Django - Beginner </List.Item>
                      <List.Item>HTML - Beginner</List.Item>
                    </List.List>
                  </List.Item>
                </List>
                </Grid.Column>

                <Grid.Column width={5}>
                <List bulleted>
                  <List.Item>
                    <b>Tools</b>
                    <List.List>
                      <List.Item>Visual Studio</List.Item>
                      <List.Item>Git</List.Item>
                      <List.Item>Postman</List.Item>
                    </List.List>
                  </List.Item>
                </List>
                </Grid.Column>


                <Grid.Column width={5}>
                <List bulleted>
                  <List.Item>
                    <b>Operating Systems</b>
                    <List.List>
                      <List.Item>MacOS</List.Item>
                      <List.Item>Linux</List.Item>
                      <List.Item>Microsoft Windows</List.Item>
                    </List.List>
                  </List.Item>
                </List>
                </Grid.Column>

                </Grid.Row>
                </Grid>
            </Container> 





           </Container>

           

         </Segment>
    
    
    
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={15}>
              <Header inverted as='h4' content='Contact Me' />
              <List link inverted>
                <List.Item as='a'>zbridwel@gmail.com</List.Item>
                <List.Item as='a' 
                href='https://www.linkedin.com/in/zach-bridwell-6367aa170?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYQyUcyswQESnavfc6%2BslVw%3D%3D'
                target='_blank' >LinkedIn</List.Item>
                <List.Item as='a'
                href= 'https://github.com/ZachBridwell'
                target='_blank'>GitHub</List.Item>
                <List.Item as='a' href={resume} target='_blank' >Resume</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
         </Segment.Group>
     
  );
}

export default App;
