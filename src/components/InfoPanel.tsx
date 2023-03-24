import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export const InfoPanel = () => {
  return (
    <div className="info-tabs">
      <Tabs>
        <TabList>
          <Tab>Prompt</Tab>
          <Tab>Solution</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Tabs>
              <TabList>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>HTML</p>
                </TabPanel>
                <TabPanel>
                  <p>CSS</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
