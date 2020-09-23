const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);


const div3 = dom.create("<div></div>")
dom.wrap(test,div3)


const nodes = dom.empty(window.empty)
console.log(nodes)




dom.attr(test,'title','Hi,I am laoduan')
const title = dom.attr(test,'title')

console.log(`title:${title}`)


dom.text(test)
dom.text(test,'你好，我是新的内容')


dom.style(test,{border:'1px solid red',color:'blue'})
dom.style(test,'border')
console.log(test)
dom.style(test,'border','1px solid black')

dom.class.add(test,'red')
dom.class.add(test,'blue')
dom.class.remove(test,'blue')



const fn =()=> {
    console.log('点击了')
}
dom.on(test,'click',fn)
dom.off(test,'click',fn)


const testDiv = dom.find('#test')[0]
console.log(testDiv)

const test2 = dom.find('#test2')[0]
console.log(dom.find('.red',test2)[0])

console.log(dom.parent(test))

console.log(dom.siblings(dom.find('#ae2')[0]))


console.log(dom.next(dom.find('#ae2')[0]))
console.log(dom.previous(dom.find('#ae2')[0]))

const t = dom.find('#travel')[0]
console.log('滴滴，t要来了')
// console.log(dom.find('#travel')[0])
console.log(t)
// console.log(111111111)

dom.style(t1,'color','red')
let fn3 = (node)=>{
    console.log('当前的node节点是：')
    console.log(node)
    return dom.style(node,'color','red')
}
dom.each(dom.children(t),fn3)
dom.each(t,fn3)
console.log(2222)


console.log(dom.index(s2))