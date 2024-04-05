import React from 'react';
import { Button, Container, Form, FormGroup } from 'reactstrap';

function InputForm1(props: any) {
    return (
        <Container>
            <Form>
                {/* Họ và tên */}
                <div>
                    <label htmlFor="">Họ và tên</label>
                    <input type="text" placeholder='tên' />
                </div>

                {/* Điện thoại */}
                <div>
                    <label htmlFor="">Điện thoại</label>
                    <input type="text" placeholder='số điện thoại'/>
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='email'/>
                </div>

                {/* Địa Điểm chính xác */}
                <div>
                    <label htmlFor="">Địa điểm chính xác</label>
                    <input type="text" placeholder='email'/>
                </div>

                {/* Nút xử lý */}
                    <Button color="primary">Create</Button>
                    <Button color="danger">Reset</Button>

            </Form>
        </Container>
    );
}

export default InputForm1;