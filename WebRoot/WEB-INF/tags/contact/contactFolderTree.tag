<%@ tag body-content="empty" %>
<%@ attribute name="editmode" rtexprvalue="true" required="false" %>
<%@ attribute name="keys" rtexprvalue="true" required="true" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<zm:getMailbox var="mailbox"/>

<jsp:useBean id="expanded" scope="session" class="java.util.HashMap" />
<c:set var="expanded" value="${sessionScope.expanded.contacts ne 'collapse'}"/>

<div class=Tree>
    <table width=100% cellpadding=0 cellspacing=0>
        <tr>
            <c:url var="toggleUrl" value="/h/search">
                <c:param name="st" value="contact"/>
                 <c:param name="${expanded ? 'collapse' : 'expand'}" value="contacts"/>
             </c:url>
             <th style='width:20px'><a href="${toggleUrl}"><app:img altkey="${ expanded ? 'ALT_TREE_EXPANDED' : 'ALT_TREE_COLLAPSED'}" src="${ expanded ? 'dwt/NodeExpanded.gif' : 'dwt/NodeCollapsed.gif'}"/></a></th>
            <th class='Header'><fmt:message key="addressBooks"/></th>
            <th width='1%' align='right' class='ZhTreeEdit'>
                <c:if test="${empty editmode}">
                    <c:url value="/h/maddrbooks" var="mabUrl"/>
                    <a href="${mabUrl}" ><fmt:message key="TREE_EDIT"/></a>
                </c:if>
            </th>
        </tr>

        <c:if test="${expanded}">

            <app:doContactFolderTree skiproot="${false}" skipsystem="false" skiptrash="true"/>

            <app:overviewFolder types="contact" folder="${mailbox.trash}"
                                icon="common/Trash.gif"/>
            <app:doContactFolderTree skiproot="${true}" parentid="${mailbox.trash.id}" skipsystem="false"/>
        </c:if>
    </table>

</div>
