import {Dropdown} from "react-bootstrap";
import "../Style/BlogPage.css";
import {useState} from "react";

export default function OrderDropdown(
    {
        selected,
        setSelected,
    }: {
        selected: string,
        setSelected: React.Dispatch<React.SetStateAction<string>>,
    }
) {

    const options = ["Default", "A->Z", "Z->A", "Newest", "Oldest"];
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Dropdown className="OrderDropdown" show={showDropdown} onToggle={(isOpen) => setShowDropdown(!showDropdown)}>
            <Dropdown.Toggle className="DropdownButton">
                {selected}
            </Dropdown.Toggle>
            <Dropdown.Menu className="DropdownMenu" style={{display: (showDropdown ? "flex" : "none")}}>
                {options.map((option) => (
                    <Dropdown.Item key={option} onClick={(e) => {
                        setSelected(option);
                    }}>{option}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                    </Dropdown>
                    );
                }