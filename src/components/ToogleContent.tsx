import { Pressable, Image, Text } from "react-native";

type ToggleContentProps = {
  id: string;
  uri: string;
  label: string;
  show: string;
  setShow: (x: string) => void;
};

const ToggleContent = ({
  id,
  uri,
  label,
  show,
  setShow,
}: ToggleContentProps) => {
  return (
    <Pressable
      onPress={() => setShow(id)}
      className={`flex-row items-center ${
        show === id ? "bg-[#1f2125]" : ""
      } p-2 rounded-xl`}
    >
      <Image
        source={{
          uri: uri,
        }}
        height={25}
        width={25}
      />
      {show == id && <Text className=" text-white p-2">{label}</Text>}
    </Pressable>
  );
};

export default ToggleContent;
