import {
  Container,
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  Spacer,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import More from "./pages/more";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <div>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              py={2}
              px={20}
              gap={10}
            >
              <Box>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="2xl"
                  style={{ color: "#772eff" }}
                />
              </Box>
              <Tabs>
                <TabList>
                  <Tab>
                    <NavLink to="/">Home</NavLink>
                  </Tab>
                  <Tab>
                    <NavLink to="/more">More</NavLink>
                  </Tab>
                </TabList>
              </Tabs>
              <Spacer />
              <Box>
                <FontAwesomeIcon
                  icon={faHeart}
                  size="xl"
                  style={{ color: "ff0000" }}
                />
              </Box>
            </Flex>
          </div>
        </nav>

        <Container maxW={"5xl"} py={20}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/more" component={More} />
          </Switch>
        </Container>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
