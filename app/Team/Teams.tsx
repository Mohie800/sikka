"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Typo from "../component/Typo";
const Teams = () => {
  let mounted = true;

  const [deviceSize, changeDeviceSize] = useState(0);
  const [isMobilePhone, setisMobilePhone] = useState(false);
  const [isDesktop, setisDesktop] = useState(false);
  const [isTablet, setisTablet] = useState(false);

  useEffect(() => {
    if (deviceSize != 0) {
      setisDesktop(deviceSize > 1025);
      setisTablet(deviceSize < 1024 && deviceSize >= 768);
      setisMobilePhone(deviceSize < 767);
    }
  }, [deviceSize]);

  useEffect(() => {
    const loadScripts = async () => {
      // Helper function to load scripts dynamically
      const loadScript = (src: string): Promise<void> => {
        return new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () =>
            reject(new Error(`Failed to load script: ${src}`));
          document.body.appendChild(script);
        });
      };

      try {
        // Load scripts sequentially
        // await loadScript("/js/imagesloaded.pkgd.min.js");
        await loadScript("/team/js/utils.js");
        await loadScript("/team/js/imagesloaded.pkgd.min.js");
        await loadScript("/team/js/gsap.min.js");
        await loadScript("/team/js/splitting.min.js");
        await loadScript("/team/js/card.js");
        // await loadScript("/team/js/card2.js");
        // await loadScript("/team/js/card3.js");
        await loadScript("/team/js/index.js");
        console.log("done init");

        // Initialize imagesLoaded after all scripts are loaded
      } catch (error) {
        console.error(error);
      }
    };

    if (mounted) {
      loadScripts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mounted = false;
      changeDeviceSize(window.innerWidth);
    }
  }, []);
  return (
    <div>
      <main>
        <Typo className="team-members-header">Team Members</Typo>
        <div className="grid" data-effect="hover-1">
          <div className="card">
            <div
              className="card__img"
              style={{ backgroundImage: "url(team/img/3.jpg)" }}
            ></div>
            <div className="card__box card__box--c">
              <Typo className="card__box-number">
                Media Labs Project Manager, He is a lover of programming,
                graphic design, and tennis.
              </Typo>
            </div>
            <div className="card__box card__box--d">
              <Typo className="card__box-category">Mohamed Munaf</Typo>
            </div>
          </div>
          {!isMobilePhone && <div className="card card--empty"></div>}
          <div className="card card--alt">
            <div
              className="card__img"
              style={{ backgroundImage: "url(team/img/22.jpg)" }}
            ></div>
            <div className="card__box card__box--a">
              <Typo className="card__box-number">
                A poet, writer and a cultural editor in many newspapers and
                magazines.
              </Typo>
            </div>
            <div className="card__box card__box--d">
              <Typo className="card__box-category">Mamoun Eltlib</Typo>
            </div>
          </div>
          <div className="card">
            <div
              className="card__img"
              style={{ backgroundImage: "url(team/img/2.jpg)" }}
            ></div>
            <div className="card__box card__box--b">
              <Typo className="card__box-number">
                Writer, journalist, and translator, interested in Arts and
                social sciences.
              </Typo>
            </div>
            <div className="card__box card__box--c">
              <Typo className="card__box-category">Mujahid Eldouma</Typo>
            </div>
          </div>
          {!isMobilePhone && <div className="card card--empty"></div>}
          <div className="card card--alt">
            <div
              className="card__img"
              style={{ backgroundImage: "url(team/img/21.jpg)" }}
            ></div>
            <div className="card__box card__box--b">
              <Typo className="card__box-number">
                Social Media accounts manager of the Sikka project interested in
                art, music and culture.
              </Typo>
            </div>
            <div className="card__box card__box--c">
              <Typo className="card__box-category">Samah Hassan</Typo>
            </div>
          </div>
          <div className="card card--alt">
            <div
              className="card__img"
              style={{ backgroundImage: "url(team/img/17.jpg)" }}
            ></div>
            <div className="card__box card__box--b">
              <Typo className="card__box-number">
                Journalist, communication officer coordinating SIKKA platform
                with cultural actors, creators.
              </Typo>
            </div>
            <div className="card__box card__box--d">
              <Typo className="card__box-category">Fatma Eltijany</Typo>
            </div>
          </div>

          <div className="card">
            <div
              className="card__img"
              style={{ backgroundImage: "url(team/img/20.jpg)" }}
            ></div>
            <div className="card__box card__box--c">
              <Typo className="card__box-number">
                Scene creator, audiovisual content maker integrates experience
                into SIKKA work system.
              </Typo>
            </div>
            <div className="card__box card__box--d">
              <Typo className="card__box-category">Basel Hassan</Typo>
            </div>
          </div>
          {!isMobilePhone && <div className="card card--empty"></div>}

          <div className="card card--alt">
            <div
              className="card__img"
              style={{ backgroundImage: "url(team/img/23.jpg)" }}
            ></div>
            <div className="card__box card__box--c">
              <Typo className="card__box-number">
                Digital marketing & E commerce specialist and the team moderator
                of the Sikka team.
              </Typo>
            </div>
            <div className="card__box card__box--d">
              <Typo className="card__box-category">Hassan Adil</Typo>
            </div>
          </div>

          <div className="card">
            <div
              className="card__img"
              style={{ backgroundImage: "url(team/img/24.jpg)" }}
            ></div>
            <div className="card__box card__box--c">
              <Typo className="card__box-number">
                Filmmaker, wildlife photographer, and camping lover.
              </Typo>
            </div>
            <div className="card__box card__box--d">
              <Typo className="card__box-category">Mohamed Ismail (Teyor)</Typo>
            </div>
          </div>
          {!isMobilePhone && <div className="card card--empty"></div>}
          {!isMobilePhone && <div className="card card--empty"></div>}

          <div className="card">
            <div
              className="card__img"
              style={{ backgroundImage: "url(team/img/25.jpg)" }}
            ></div>
            <div className="card__box card__box--c">
              <Typo className="card__box-number">
                Graphic designer handles multimedia and motion graphics
                for SIKKA team.
              </Typo>
            </div>
            <div className="card__box card__box--d">
              <Typo className="card__box-category">Nashwa Siraj</Typo>
            </div>
          </div>

          <div className="card">
            <div
              className="card__img"
              style={{ backgroundImage: "url(team/img/26.jpg)" }}
            ></div>
            <div className="card__box card__box--c">
              <Typo className="card__box-number">
                Writer and researcher crafts articles, edits texts for
                audio-visual content.
              </Typo>
            </div>
            <div className="card__box card__box--d">
              <Typo className="card__box-category">Alsadig Yaseen</Typo>
            </div>
          </div>
          {!isMobilePhone && <div className="card card--empty"></div>}
        </div>
      </main>
    </div>
  );
};

export default Teams;
