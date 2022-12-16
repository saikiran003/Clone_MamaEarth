import React from "react";
import styles from "./Products.module.css";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import ProductDetails from "./ProductDetails";

export const ProductDesp = () => {
  return (
    <>
      <div className={styles.AOT_cartContainer}>
        <ProductDetails />

        <div className={styles.TabsContainer}>
          <ChakraProvider>
            <Tabs variant="unstyled">
              <TabList>
                <Tab
                  _selected={{
                    width: "200px",
                    borderRadius: "5px",
                    color: "white",
                    background: "blue.500",
                  }}
                >
                  Key Ingredients
                </Tab>
                <Tab
                  _selected={{
                    width: "200px",
                    borderRadius: "5px",
                    color: "white",
                    background: "green.400",
                  }}
                >
                  How to Use
                </Tab>
                <Tab
                  _selected={{
                    width: "200px",
                    borderRadius: "5px",
                    color: "white",
                    background: "green.400",
                  }}
                >
                  Who can Use
                </Tab>
                <Tab
                  _selected={{
                    width: "200px",
                    borderRadius: "5px",
                    color: "white",
                    background: "green.400",
                  }}
                >
                  Why Mamaearth
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className={styles.tabsgrid}>
                    <div className={styles.tabsinnerDiv}>
                      <div>
                        <img
                          src={
                            "https://mamaearthp.imgix.net/wysiwyg/onion-seed-oil.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div>
                        <p>
                          <span>Onion Seed Oil</span> : Onion Oil increases
                          blood supply to hair follicles, which in turn improves
                          hair growth. It also prevents hair loss.
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className={styles.tabsinnerDiv}>
                        <div>
                          <img
                            src={
                              "https://mamaearthp.imgix.net/wysiwyg/redensyl.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div>
                          <p>
                            <span>Redensyl</span> : The newest breakthrough
                            ingredient against hair loss, and the best
                            alternative to hair transplantation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className={styles.tabsinnerDiv}>
                        <div>
                          <img
                            src={
                              "https://mamaearthp.imgix.net/wysiwyg/image022-100x100.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div>
                          <p>
                            <span>Almond Oil</span> : Omega-3 fatty acids,
                            phospholipids, Vitamin E, magnesium present in Onion
                            Oil nourish and strengthen your hair.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className={styles.tabsinnerDiv}>
                        <div>
                          <img
                            src={
                              "https://mamaearthp.imgix.net/wysiwyg/image031-100x100.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div>
                          <p>
                            <span>Castor Oil</span> : It deeply nourishes the
                            scalp with proteins, vitamins and antioxidants and
                            helps increase the blood circulation to the scalp.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className={styles.tabsinnerDiv}>
                        <div>
                          <img
                            src={
                              "https://mamaearthp.imgix.net/wysiwyg/image025.png"
                            }
                            alt=""
                          />
                        </div>
                        <div>
                          <p>
                            <span>Bhringraj Oil</span> : It aids in blood
                            circulation, promotes hair growth, and prevents hair
                            fall. Since it is also deeply moisturizing.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className={styles.tabsinnerDiv}>
                        <div className={styles.tabsinnerImg}>
                          <img
                            src={
                              "https://mamaearthp.imgix.net/wysiwyg/image028-100x100.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div>
                          <p>
                            <span>Amla Oil</span> : Amla Oil promotes overall
                            health of hair & scalp, and prevents premature
                            greying.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div>
                    <p>
                      <span>Step1</span>:Part your hair in two halves and apply
                      the oil directly to the scalp
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>Step2</span>:Leave it overnight, or for few hours.
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>Step3</span>: Wash off with Mamaearth Onion Shampoo
                    </p>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div>
                    <ul>
                      <li>Men and Women of age 15 years and above</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>The hair oil is suitable for all hair types</li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className={styles.tabsinnerDiv4}>
                    <div className={styles.tabsinner4}>
                      <div>
                        <img
                          src={
                            "https://mmrth-mg-cs.honasa-production.net/pub/media/wysiwyg/onion-hair-oil_1-1_1.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className={styles.tabsinner4_1}>
                        <span>
                          <i class="fas fa-check"></i>
                        </span>{" "}
                        <span>Reduces hair fall</span>
                        <br></br>
                        <span>
                          <i class="fas fa-check"></i>
                        </span>{" "}
                        <span>Promotes Hair Growth</span>
                        <br></br>
                        <span>
                          <i class="fas fa-check"></i>
                        </span>{" "}
                        <span>Nourishes Hair</span>
                        <br></br>
                        <span>
                          <i class="fas fa-check"></i>
                        </span>{" "}
                        <span>Suitable For All Hair Types</span>
                        <br></br>
                      </div>
                    </div>

                    <div className={styles.tabsinner5}>
                      <div>
                        <img
                          src={
                            "https://mmrth-mg-cs.honasa-production.net/pub/media/wysiwyg/ordinary-300x300.png"
                          }
                          alt=""
                        />
                      </div>
                      <div className={styles.tabsinner6}>
                        <span>
                          <i class="fas fa-times"></i>
                        </span>{" "}
                        <span>Does Not Work on Specific Issues</span>
                        <br></br>
                        <span>
                          <i class="fas fa-times"></i>
                        </span>{" "}
                        <span>Does Not Nourish Enough</span>
                        <br></br>
                        <span>
                          <i class="fas fa-times"></i>
                        </span>{" "}
                        <span>Contains Harmful Chemicals</span>
                        <br></br>
                        <span>
                          <i class="fas fa-times"></i>
                        </span>{" "}
                        <span>Contains Parabens & Silicone</span>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ChakraProvider>
        </div>

        <div className={styles.selectDiv}>
          <h1>FAQs</h1>
          <ChakraProvider>
            <Accordion allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How to use Mamaearth onion hair oil?
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Use onion oil by taking a few drops of Mamaearth hair onion
                  oil on your fingertips and apply it to your scalp. Massage
                  deeply for at least 10 mins into your scalp so that Mamaearth
                  oil reaches your hair roots. For best results leave the
                  Mamaearth oil onion overnight or for a few hours before
                  washing your hair. The next step is choose a toxin-free hair
                  shampoo and wash your hair gently with an effective shampoo.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What are the benefits of using Mamaearth onion hair oil?
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Mamaearth onion seed oil for hair has been formulated with the
                  benefits of onion seed hair oil, bhringraj oil, almond oil,
                  amla oil, castor oil, and Redensyl oil to provide you with
                  healthier and shinier hair quality. It is very lightweight and
                  non-sticky with an amazing fragrance. Powered by Red Onion
                  Hair Oil Benefits, Hair fall onion oil reduces hair fall and
                  helps accelerate hair growth. Mamaearth onion hair growth oil
                  is free of harmful chemicals and toxins and is certified by
                  Made Safe.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Can we use onion oil on face?
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  The uses of onion oil are limited to hair and scalp. You may
                  use hair oil for hair loss, adding strength and shine, and to
                  nourish the scalp but you should not use it on your face.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Which is best hair oil for hair fall control?
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Onion oil, especially red onion hair oil, is one of the best
                  hair fall control oil.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How long Will it Take For The Face Wash To Show Results?
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  As the face wash is made of natural ingredients, hence it will
                  depend on the gravity of your skin concern. However, visible
                  results should be seen within 3-4 weeks of regular use.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Can Teengers Use Mamaearth Charcoal natural face wash?
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Absolutely, it can be used by teengers as it is made with the
                  best natural and toxin-free ingredients,ideal for young skin.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Which product of Mamaearth is best for the face?
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Some of the best Mamaearth products for the face are Ubtan
                  Face Wash with Turmeric & Saffron of Tan Removal, Skin Correct
                  face Serum for Ance Marks & Scars, Ubtan Oil-Fre Moisturizer,
                  and Skin Illuminate Face Serum for Radiant Skin with Vitamin C
                  and Turmeric.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Is It Suitable For All Skin Types?
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Mamaearth Vitamin C Underarm Scrub contains natural
                  ingredients and is suitable for all skin types.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Can I Use It After Hair Removal?
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Since the skin is sensitive just after hair removal,it is not
                  recommended that you use Mamaearth Vitamin C Underman
                  Brightening Scrub Immediately.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ChakraProvider>
        </div>
      </div>
    </>
  );
};
