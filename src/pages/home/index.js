import {
  Box,
  Flex,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  HStack,
  Button,
  SkeletonCircle,
  SkeletonText,
  Divider,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFormik } from "formik";
import validations from "./validations";

function Home() {
  const [result, setResult] = useState(null);
  const [adviceText, setAdviceText] = useState("");
  const formik = useFormik({
    initialValues: {
      height: 0,
      weight: 0,
    },
    validationSchema: validations,
    onSubmit: (values) => {
      var bmiResult = calculateBMI(values.height, values.weight);

      setResult(bmiResult);

      var text = generateAdviceTest(bmiResult);

      setAdviceText(text);
    },
  });

  const calculateBMI = (height, weight) => {
    var h = height / 100;

    var result = weight / (h * h);

    return Math.round(result);
  };

  const generateAdviceTest = (result) => {
    var text = "no text";

    switch (result) {
      case result < 18.5:
        text =
          "Eğer bundan memnunsanız ve korumak isterseniz vücut kitle indeksiniz kadar kalori almanız gerekmektedir. Tercihiniz kilo almaktan yana ise bu durumda vücut kitle indeksinizden yaklaşık olarak 500 kalori üstünde beslenmeniz sağlıklı şekilde kilo almanızı sağlayacaktır. Aynı şekilde yediklerinizden aldığınız kalori vücut kitle indeksinizden az miktarda ise eğer bu da kilo verimi ile sonuçlanacaktır. İnsan vücudu günlük ortalama 2500 kalori yakmaktadır. Yakılan bu ortalama kalori günlük yaşantımızı sürdürürken harcadığımız enerji miktarıdır. Günlük kilo alımını destekleyen egzersizler yapmak, yemeklerden öncesinde bir parmak kadar tuz yemek/yalamak; yemek yeme esnasında çok fazla yemek yerine besin değeri yüksek besinler ve yüksek lif kaynağı olan besinler tüketmek hem midenizi yormadan gereken kalori miktarını almanızı sağlar hem de kilo alımını destekler. İdeal beden insanın kendisini mutlu ve sağlıklı hissettiği bedendir. Kendinizi sevmeyi unutmayın...";
        break;
      case result > 25:
        text =
          "Eğer bundan memnunsanız ve korumak isterseniz vücut kitle indeksiniz kadar kalori almanız gerekmektedir. Tercihiniz kilo vermekten yana ise bu durumda vücut kitle indeksinizden yaklaşık olarak 500 kalori altında beslenmeniz sağlıklı şekilde kilo vermenizi sağlayacaktır. Aynı şekilde yediklerinizden aldığınız kalori vücut kitle indeksinizden fazla miktarda ise eğer bu da kilo alımı ile sonuçlanacaktır. İnsan vücudu günlük ortalama 2500 kalori yakmaktadır. Yakılan bu ortalama kalori günlük yaşantımızı sürdürürken harcadığımız enerji miktarıdır. Günlük yaklaşık 40 dakika normal/hızlı tempoda yürümek, yemeklerden öncesinde 1-2 bardak su ve yeşillik çiğnemek; yemek yerken çok çiğneyip her bir lokmayı farkındalıkla tüketmek hem daha az besinle doymanızı hem de harcadığınız enerjinin/kalorinin alınan kaloriden fazla olmasını sağlar ve kilo verimini destekler. İdeal beden insanın kendisini mutlu ve sağlıklı hissettiği bedendir. Kendinizi sevmeyi unutmayın…";
        break;
      default:
        text =
          "Eğer bundan memnunsanız ve korumak isterseniz vücut kitle indeksiniz kadar kalori almanız gerekmektedir. Tercihiniz kilo vermekten yana ise vücut kitle indeksinizden yaklaşık olarak 500 kalori kadar az beslenmek size yardımcı olacaktır. Aynı şekilde kilo almak istediğiniz takdirde yine yaklaşık 500 kalori kadar fazla beslenmek kilo alımınızı destekleyecektir. İnsan vücudu günlük ortalama 2500 kalori yakmaktadır. Yakılan bu ortalama kalori günlük yaşantımızı sürdürürken harcadığımız enerji miktarıdır. Hedefiniz kilonuzu korumak ise yediklerinizin besin değerine dikkat ederek indeksi aşmadan beslenmek, aştığınız takdirde fazla efor istemeyen egzersizlere başvurmak ya da vücudunuzu güçlendirip formunuzu oturtacak sporlara başvurmak yardımcı olacaktır. Tercihiniz kilo veriminden yana ise yemeklerden öncesinde 1-2 bardak su içmek, kalori yakımını yürüyüş ve yüzme gibi sporlarla desteklemek kilo vermenize yardımcı olacaktır. Kilo almak istediğiniz takdirde ise yemeklerden öncesinde bir parmak kadar tuz tüketmek, besleyiciliği yüksek besinler ve zengin lif kaynağı olan besinleri tüketmek kilo alımınıza yardımcı olacaktır. İdeal beden insanın kendisini mutlu ve sağlıklı hissettiği bedendir. Kendinizi sevmeyi unutmayın…";
        break;
    }

    return text;
  };

  return (
    <div>
      <Flex>
        <Box flex={1}>
          <Heading as="h2" size="md">
            Vücut Kitle İndeksi Hesaplayıcı
          </Heading>
          <form onSubmit={formik.handleSubmit}>
            <FormControl p={5}>
              <HStack>
                <FormLabel>Kilonuz</FormLabel>
                <Input
                  type="number"
                  name="weight"
                  placeholder="Örn. 68"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.weight}
                  isInvalid={formik.errors.weight && formik.touched.weight}
                />
              </HStack>
              <FormHelperText>
                Kilonuzu kilogram (kg) cinsinden giriniz.
              </FormHelperText>
              {formik.touched.weight && (
                <FormHelperText color={"red"}>
                  {formik.errors.weight}
                </FormHelperText>
              )}
              <HStack mt={4}>
                <FormLabel>Boyunuz</FormLabel>
                <Input
                  type="number"
                  name="height"
                  placeholder="Örn. 173"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.height}
                  isInvalid={formik.errors.height && formik.touched.height}
                />
              </HStack>
              <FormHelperText>
                Boyunuzu santimetre (cm) cinsinden giriniz.
              </FormHelperText>
              {formik.touched.height && (
                <FormHelperText color={"red"}>
                  {formik.errors.height}
                </FormHelperText>
              )}
              <Button colorScheme="green" type="submit" mt={5}>
                Hesapla
              </Button>
            </FormControl>
          </form>
        </Box>
        {result == null && (
          <Box padding="6" boxShadow="lg" bg="white" flex={2}>
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={6} spacing="4" skeletonHeight="2" />
          </Box>
        )}
        {result != null && (
          <Box flex={2}>
            <HStack>
              <Text>Vücut kitle indeksiniz</Text>
              <Text color={"blue.600"} fontSize={"lg"}>
                <b>{result}</b>
              </Text>
            </HStack>
            <br />
            <Heading as="h3" size={"md"} mb={2} color={"green.600"}>
              Bilgilendirme
            </Heading>
            <Text>{adviceText}</Text>
          </Box>
        )}
      </Flex>

      <Divider my={10} />

      <div>
        <Heading as="h2" size={"md"}>
          Vücut Kitle İndeksi (VKİ) Nedir?
        </Heading>
        <Box p={5}>
          <Text>
            Vücut Kitle İndeksi (VKİ), bir kişinin vücut ağırlığını kilogram
            cinsinden vücut yüzey alanına bölerek elde edilen bir ölçüttür. VKİ,
            bir kişinin kilosunun boyuna göre ne kadar uygun olduğunu
            değerlendirmek için kullanılır ve genellikle kilo fazlası veya kilo
            eksikliğini belirlemek için bir araç olarak kullanılır.
          </Text>
          <br />
          <Text>
            Elde edilen VKİ değeri aşağıdaki şekilde kategorilere ayrılır:
          </Text>
          <br />
          <UnorderedList>
            <ListItem>VKİ 18.5 ve altı: Zayıf</ListItem>
            <ListItem>VKİ 18.5 - 24.9 arası: Normal kilolu</ListItem>
            <ListItem>VKİ 25 - 29.9 arası: Hafif kilolu (kilolu)</ListItem>
            <ListItem>VKİ 30 - 34.9 arası: Obezite Sınıfı I</ListItem>
            <ListItem>VKİ 35 - 39.9 arası: Obezite Sınıfı II</ListItem>
            <ListItem>
              VKİ 40 ve üstü: Obezite Sınıfı III (Aşırı obezite)
            </ListItem>
          </UnorderedList>
          <br />
          <Text>
            VKİ, bireylerin sağlık risklerini değerlendirmede ve kilo kontrolünü
            izlemede kullanılır. Ancak VKİ, sadece bir kişinin sağlık durumu
            hakkında tam bir resim sunmaz. Yağ dağılımı, kas kütlesi ve genel
            yaşam tarzı gibi diğer faktörler de önemlidir. Dolayısıyla, VKİ
            değeri bir başlangıç noktası sağlayabilir, ancak tam bir sağlık
            değerlendirmesi yapmak için diğer faktörler de dikkate alınmalıdır.
            Sağlık profesyonelinizle VKİ'niz ve genel sağlık durumunuz hakkında
            daha fazla bilgi alabilirsiniz.
          </Text>
        </Box>
      </div>
    </div>
  );
}

export default Home;
