import type {FC, DetailedHTMLProps, ButtonHTMLAttributes, PropsWithChildren} from 'react'

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonProps = ReactButtonProps & {}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className: _className,
  ...buttonProps
}) => {
  const className = ['btn', _className].join(' ')
  return <button {...buttonProps} className={className} />
}

// 1) FC: React의 FunctionComponent 타입을 의미(함수형 컴포넌트를 정의할 때 사용)
// 2) PropsWithChildren<ButtonProps>: React에서 제공하는 유틸리티 타입(props에 children 속성을 자동으로 추가)
// 3) {...buttonProps}:spread 문법을 사용하여 buttonProps 객체의 모든 속성을 <button> 요소의 props로 전달(Button 컴포넌트에 전달된 모든 props가 <button> 요소에 적용)
