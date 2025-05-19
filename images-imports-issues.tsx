import map from "/public/map.png";
import me from "../../../../public/me.png";       // импорты изображений

////////////// --all_imports--


export const AboutMe = () => {
    return (
        <AboutMeStyled>
            <Container aboutMeAdaptive padding={"46px 42px 0 42px"}>
                <WrapperBcg>
                    <StyledImage variant="map" src={map} alt="map"/>       //чтобы изображения отображались после деплоя приложения, необходимо их импортировать, а не как путь вставлять в src
                    <StyledImage variant="me" src={me} alt="me"/>
                    <InfoAboutMe>
                        <Icons>
                            <HoverableIcon iconId="whatsappWhite" viewBox="0 0 33 33" width="26px" height="26px"/>
                            <HoverableIcon iconId="instagramWhite" viewBox="0 0 33 33" width="26px" height="26px"/>
                            <HoverableIcon iconId="upArrow" viewBox="0 0 33 33" width="26px" height="26px"/>
                        </Icons>
                        <NameAboutMe>I'm <span>Alina</span> Groza</NameAboutMe>
                        <UlStyled>
                            <LiStyled>I was born in Tiraspol</LiStyled>
                            <LiStyled>I’m 17 years old</LiStyled>
                            <LiStyled>I have started my interest in this field from 2023</LiStyled>
                            <LiStyled>I’m Frontend-developer WED</LiStyled>
                            <LiStyled>My phone number in Moldova ... </LiStyled>
                        </UlStyled>
                    </InfoAboutMe>
                </WrapperBcg>
            </Container>

        </AboutMeStyled>

    );
};
