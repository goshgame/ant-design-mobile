import { Button, Space, Swiper, SwiperRef } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'
import React, { useRef } from 'react'

import styles from './demo1.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div className={styles.content} style={{ background: color }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

export default () => {
  const ref = useRef<SwiperRef>(null)
  return (
    <>
      <DemoBlock title='基础用法'>
        <Swiper docDirection={'rtl'}>{items}</Swiper>
      </DemoBlock>
      <DemoBlock title='循环'>
        <Swiper
          loop
          autoplay
          onIndexChange={i => {
            console.log(i, 'onIndexChange1')
          }}
          docDirection={'rtl'}
        >
          {items}
        </Swiper>
      </DemoBlock>
      <DemoBlock title='手动控制'>
        <Space direction='vertical' block>
          <Swiper allowTouchMove={false} ref={ref} loop docDirection={'rtl'}>
            {items}
          </Swiper>
          <Space>
            <Button
              onClick={() => {
                ref.current?.swipePrev()
              }}
            >
              上一张
            </Button>
            <Button
              onClick={() => {
                ref.current?.swipeNext()
              }}
            >
              下一张
            </Button>
          </Space>
          <DemoDescription content='在禁用手势拖拽后，可以通过 Ref 进行手动翻页' />
        </Space>
      </DemoBlock>
    </>
  )
}
